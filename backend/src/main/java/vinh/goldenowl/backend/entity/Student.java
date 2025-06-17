package vinh.goldenowl.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @Column(name = "registration_number")
    private String registrationNumber;

    @Column(nullable = true)
    private Double math;
    @Column(nullable = true)
    private Double literature;
    @Column(nullable = true)
    private Double foreignLanguage;
    @Column(nullable = true)
    private Double physics;
    @Column(nullable = true)
    private Double chemistry;
    @Column(nullable = true)
    private Double biology;
    @Column(nullable = true)
    private Double history;
    @Column(nullable = true)
    private Double geography;
    @Column(nullable = true)
    private Double civicEducation;
    @Column(nullable = true)
    private String foreignLanguageCode;
}
