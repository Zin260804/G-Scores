package vinh.goldenowl.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vinh.goldenowl.backend.entity.Student;
import vinh.goldenowl.backend.service.StudentService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*") // Cho phép React frontend gọi API
public class StudentController {

    @Autowired
    private StudentService studentService;

    // GET all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    // GET student by registration number
    @GetMapping("/search/{registrationNumber}")
    public Optional<Student> getStudentByRegistrationNumber(@PathVariable String registrationNumber) {
        return studentService.getStudentByRegistrationNumber(registrationNumber);
    }

    @GetMapping("/top10/blockA")
    public List<Student> getTop10BlockAStudents() {
        return studentService.getTop10BlockAStudents();
    }

    @GetMapping("/subjectCharts")
    public Map<String, Map<String, Long>> getSubjectStatistics() {
        return studentService.getSubjectStatistics();
    }

    @GetMapping("/total")
    public Map<String, Long> getTotalStudents() {
        Map<String, Long> response = new HashMap<>();
        response.put("total", studentService.getTotalStudents());
        return response;
    }
}
