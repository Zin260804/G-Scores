# G-Scores: National High School Exam Scores Portal

This is my submission for the Golden Owl Web Developer Intern Assignment. The project is built as a full-stack web application to manage and analyze high school exam scores for the year 2024.

## 🚀 Features

### ✅ Must Have
- ✅ Parse raw data (`diem_thi_thpt_2024.csv`) and store into database using **Flyway Migration** & **Seeder**.
- ✅ Search student scores by **Registration Number**.
- ✅ Generate reports with score bands:
  - `>= 8 points`
  - `6 - 8 points`
  - `4 - 6 points`
  - `< 4 points`
- ✅ Statistics chart for the above bands across all subjects.
- ✅ Top 10 students for Block A (Math, Physics, Chemistry).

### ✨ Nice to Have
- ✅ Fully responsive design for desktop, tablet & mobile.
- ✅ Fullstack project containerized with **Docker Compose**.
- ✅ Fully deployable production-ready architecture.

---

## 🛠 Technology Stack

### Frontend
- **React** + **TypeScript** + **Vite**
- Tailwind CSS (UI optimized)
- ApexCharts for chart visualization
- Axios for API consumption

### Backend
- **Spring Boot 3 (Java 21)**
- Spring Data JPA (Hibernate)
- Flyway for database migration
- HikariCP connection pool
- Maven for build automation

### Database
- **MySQL 8**

### Deployment
- Docker & Docker Compose (Multi-stage builds for optimal image size)
- Ready to deploy on platforms like **Render / Fly.io / Railway / DigitalOcean**

---

## 🖥 Application Overview

### Data Flow
1. Raw CSV file processed via seeder logic.
2. Data stored into MySQL using Flyway migration.
3. Backend exposes secured RESTful APIs.
4. React frontend consumes APIs and presents clean data visualizations.

### Main Functionalities

| Feature | Description |
|---------|-------------|
| Search Score | Input registration number to lookup student's exam result |
| Score Reports | Generate score band distributions per subject |
| Top 10 Block A | List top scoring students in Math - Physics - Chemistry |
| Full Chart | Interactive stacked bar charts with dynamic scaling |
| Responsive UI | Adaptive across devices |

---

## 🧪 How to Run Locally

### 1️⃣ Prerequisites

- Install [Docker](https://docs.docker.com/get-docker/)
- Install [Git](https://git-scm.com/)

### 2️⃣ Clone Project

```bash
git clone https://github.com/yourusername/gscores.git

### 2️⃣ Clone Project

```bash
git clone https://github.com/yourusername/gscores.git
cd gscores
