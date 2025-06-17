import { useEffect, useState } from "react";
import { getTopBlockAStudents, TopBlockAStudent } from '../service/StudentService.tsx';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import ComponentCard from "../components/common/ComponentCard";

export default function Top10() {
    const [students, setStudents] = useState<TopBlockAStudent[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTopBlockAStudents();

                // Tính totalScore phía frontend:
                const dataWithTotal = data.map(student => ({
                    ...student,
                    totalScore: (student.math ?? 0) + (student.physics ?? 0) + (student.chemistry ?? 0),
                }));

                setStudents(dataWithTotal);
            } catch {
                console.error("Something went wrong");
            }
        };

        fetchData();
    }, []);

    return (
        <ComponentCard title="Top 10 - Block A">
            <div className="max-w-full overflow-x-auto">
                <Table className="w-full text-center text-lg">
                    <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                        <TableRow>
                            <TableCell isHeader className="text-theme-sm font-medium text-gray-800 text-center text-theme-xs dark:text-white/90"
                            >
                                #
                            </TableCell>
                            <TableCell isHeader className="text-theme-sm font-medium text-gray-800 text-center text-theme-xs dark:text-white/90"
                            >
                                Registration No
                            </TableCell>
                            <TableCell isHeader className="text-theme-sm font-medium text-gray-800 text-center text-theme-xs dark:text-white/90"
                            >
                                Math
                            </TableCell>
                            <TableCell isHeader className="text-theme-sm font-medium text-gray-800 text-center text-theme-xs dark:text-white/90"
                            >
                                Physics
                            </TableCell>
                            <TableCell isHeader className="text-theme-sm font-medium text-gray-800 text-center text-theme-xs dark:text-white/90"
                            >
                                Chemistry
                            </TableCell>
                            <TableCell isHeader className="text-theme-sm font-medium text-gray-800 text-center text-theme-xs dark:text-white/90"
                            >
                                Total
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {students.map((student, index) => (
                            <TableRow key={student.registrationNumber}>
                                <TableCell className="text-theme-sm font-medium text-gray-800 text-center text-theme-xs dark:text-white/90">{index + 1}</TableCell>
                                <TableCell className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">{student.registrationNumber}</TableCell>
                                <TableCell className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">{student.math}</TableCell>
                                <TableCell className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">{student.physics}</TableCell>
                                <TableCell className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">{student.chemistry}</TableCell>
                                <TableCell className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">{student.totalScore}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ComponentCard>
    );
}
