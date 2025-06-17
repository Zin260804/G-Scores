package vinh.goldenowl.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vinh.goldenowl.backend.entity.Student;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
    Student findByRegistrationNumber(String registrationNumber);

    @Query("SELECT s FROM Student s ORDER BY (COALESCE(s.math, 0) + COALESCE(s.physics, 0) + COALESCE(s.chemistry, 0)) DESC")
    List<Student> findTop10ByBlockA(org.springframework.data.domain.Pageable pageable);

    @Query("SELECT COUNT(s) FROM Student s WHERE " +
            "CASE WHEN :subject = 'math' THEN s.math " +
            "     WHEN :subject = 'physics' THEN s.physics " +
            "     WHEN :subject = 'chemistry' THEN s.chemistry " +
            "     WHEN :subject = 'literature' THEN s.literature " +
            "     WHEN :subject = 'biology' THEN s.biology " +
            "     WHEN :subject = 'history' THEN s.history " +
            "     WHEN :subject = 'geography' THEN s.geography " +
            "     WHEN :subject = 'civicEducation' THEN s.civicEducation " +
            "     WHEN :subject = 'foreignLanguage' THEN s.foreignLanguage " +
            "END BETWEEN :min AND :max")
    long countBySubject(@Param("subject") String subject, @Param("min") double min, @Param("max") double max);
}
