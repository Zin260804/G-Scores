import { useState } from "react";
import ComponentCard from "./common/ComponentCard.tsx";
import Label from "./form/Label.tsx";
import Input from "./form/InputField.tsx";
import Button from "./ui/button/Button.tsx";
import Alert from "./Alert.tsx";
import { getStudent } from '../service/StudentService.tsx';
import { Student } from "../model/Student.ts";

export default function DefaultInputs() {
    const [registrationNumber, setRegistrationNumber] = useState<string>("");
    const [student, setStudent] = useState<Student | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            const result = await getStudent(registrationNumber);
            setStudent(result);
            setError(null);
        } catch {
            setStudent(null);
            setError("Student not found");
        }
    };

    return (
        <>
            <ComponentCard title="User Registration">
                <div className="flex items-center gap-4">
                    <div className="w-1/2">
                        <Label htmlFor="input">Registration Number</Label>
                        <Input
                            type="text"
                            id="input"
                            placeholder="Enter registration number..."
                            value={registrationNumber}
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                        />
                    </div>

                    <Button size="sm" variant="primary" className="mt-5" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </ComponentCard>

            <ComponentCard title="Detail Scores">
                {error && (
                    <Alert variant="error" title="Error" message={error} showLink={false} />
                )}
                {student && (
                    <div className="space-y-4">
                        <p className="text-theme-sm text-gray-500 dark:text-gray-400">
                            <strong>Mã số đăng ký thi :</strong> {student.registrationNumber}</p>

                        <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                            {[
                                student.math != null && `Toán: ${student.math}`,
                                student.literature != null && `Văn: ${student.literature}`,
                                student.foreignLanguage != null && `Ngoại ngữ: ${student.foreignLanguage}`,
                                student.physics != null && `Vật lý: ${student.physics}`,
                                student.chemistry != null && `Hóa học: ${student.chemistry}`,
                                student.biology != null && `Sinh học: ${student.biology}`,
                                student.history != null && `Lịch sử: ${student.history}`,
                                student.geography != null && `Địa lý: ${student.geography}`,
                                student.civicEducation != null && `GDCD: ${student.civicEducation}`,
                                student.foreignLanguageCode != null && `Mã ngoại ngữ: ${student.foreignLanguageCode}`,
                            ].filter(Boolean).join(" | ")}
                        </p>
                    </div>
                )}
            </ComponentCard>
        </>
    );
}
