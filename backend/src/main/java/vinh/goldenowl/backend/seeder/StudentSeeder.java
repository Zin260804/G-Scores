package vinh.goldenowl.backend.seeder;

import org.springframework.core.io.ClassPathResource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import vinh.goldenowl.backend.entity.Student;
import vinh.goldenowl.backend.repository.StudentRepository;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

@Component
public class StudentSeeder implements CommandLineRunner {

    private final StudentRepository studentRepository;

    public StudentSeeder(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Kiểm tra nếu bảng đã có dữ liệu thì không seed nữa
        if (studentRepository.count() > 0) {
            System.out.println("Seeder skipped: data already exists.");
            return;
        }

        System.out.println("Seeding student data from CSV...");

        ClassPathResource resource = new ClassPathResource("data/diem_thi_thpt_2024.csv");
        BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream(), StandardCharsets.UTF_8));

        String line;
        boolean isFirstLine = true;
        int count = 0;

        while ((line = reader.readLine()) != null) {
            if (isFirstLine) {
                isFirstLine = false;
                continue; // bỏ qua header CSV
            }

            String[] fields = line.split(",", -1); // -1 giữ luôn cả cột rỗng

            if (fields.length < 11) {
                System.out.println("Invalid row, skip: " + Arrays.toString(fields));
                continue;
            }

            Student student = new Student();
            student.setRegistrationNumber(fields[0].trim());
            student.setMath(parseDouble(fields[1]));
            student.setLiterature(parseDouble(fields[2]));
            student.setForeignLanguage(parseDouble(fields[3]));
            student.setPhysics(parseDouble(fields[4]));
            student.setChemistry(parseDouble(fields[5]));
            student.setBiology(parseDouble(fields[6]));
            student.setHistory(parseDouble(fields[7]));
            student.setGeography(parseDouble(fields[8]));
            student.setCivicEducation(parseDouble(fields[9]));
            student.setForeignLanguageCode(fields[10].trim());

            studentRepository.save(student);
            count++;
        }

        reader.close();
        System.out.println("Seeding completed: " + count + " records inserted.");
    }

    private Double parseDouble(String s) {
        try {
            return (s == null || s.isBlank()) ? null : Double.parseDouble(s);
        } catch (NumberFormatException e) {
            return null;
        }
    }
}