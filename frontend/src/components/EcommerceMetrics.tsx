import { useEffect, useState } from "react";
import { GroupIcon } from "../icons";
import { getTotalStudents } from "../service/StudentService.tsx";

export default function EcommerceMetrics() {
  const [totalStudents, setTotalStudents] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTotalStudents();
        setTotalStudents(result);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
          </div>

          <div className="flex flex-col justify-between mt-5">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Total Scored Students
          </span>

            {loading ? (
                <h4 className="mt-2 font-bold text-gray-400 text-title-sm dark:text-gray-500">
                  Loading...
                </h4>
            ) : error ? (
                <h4 className="mt-2 font-bold text-red-500 text-title-sm">
                  {error}
                </h4>
            ) : (
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                  {totalStudents.toLocaleString()}
                </h4>
            )}
          </div>
        </div>
      </div>
  );
}
