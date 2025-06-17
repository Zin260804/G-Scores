package vinh.goldenowl.backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import vinh.goldenowl.backend.entity.Student;
import vinh.goldenowl.backend.repository.StudentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentByRegistrationNumber(String registrationNumber) {
        String normalized = normalizeRegistrationNumber(registrationNumber);
        return Optional.ofNullable(studentRepository.findByRegistrationNumber(normalized));
    }

    public List<Student> getTop10BlockAStudents() {
        return studentRepository.findTop10ByBlockA(PageRequest.of(0, 10));
    }

    public Map<String, Map<String, Long>> getSubjectStatistics() {
        Map<String, Map<String, Long>> result = new HashMap<>();
        String[] subjects = { "math", "physics", "chemistry", "literature", "biology", "history", "geography", "civicEducation", "foreignLanguage" };

        for (String subject : subjects) {
            Map<String, Long> subjectStat = new HashMap<>();
            subjectStat.put("gte8", studentRepository.countBySubject(subject, 8.0, 10.0));
            subjectStat.put("gte6_lt8", studentRepository.countBySubject(subject, 6.0, 8.0));
            subjectStat.put("gte4_lt6", studentRepository.countBySubject(subject, 4.0, 6.0));
            subjectStat.put("lt4", studentRepository.countBySubject(subject, 0.0, 4.0));
            result.put(subject, subjectStat);
        }
        return result;
    }

    public long getTotalStudents() {
        return studentRepository.count();
    }

    public String normalizeRegistrationNumber(String input) {
        if (input == null || input.isBlank()) {
            return null;
        }

        // Bỏ hết số 0 đầu
        return input.replaceFirst("^0+(?!$)", "");
    }
}
