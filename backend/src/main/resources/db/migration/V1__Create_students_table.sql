CREATE TABLE student
(
    registration_number   VARCHAR(255) NOT NULL,
    math                  DOUBLE       NULL,
    literature            DOUBLE       NULL,
    foreign_language      DOUBLE       NULL,
    physics               DOUBLE       NULL,
    chemistry             DOUBLE       NULL,
    biology               DOUBLE       NULL,
    `history`             DOUBLE       NULL,
    geography             DOUBLE       NULL,
    civic_education       DOUBLE       NULL,
    foreign_language_code VARCHAR(255) NULL,
    CONSTRAINT pk_student PRIMARY KEY (registration_number)
);