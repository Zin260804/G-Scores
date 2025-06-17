import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { getSubjectStatistics, StatisticsResponse } from "../service/StudentService.tsx";
import ComponentCard from "./common/ComponentCard.tsx";

export default function ScoreDistributionChart() {
  const [chartData, setChartData] = useState<{ categories: string[], series: ApexAxisChartSeries }>({
    categories: [],
    series: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data: StatisticsResponse = await getSubjectStatistics();
      const subjects = Object.keys(data);

      const gte8 = subjects.map(subject => data[subject].gte8);
      const gte6_8 = subjects.map(subject => data[subject].gte6_lt8);
      const gte4_6 = subjects.map(subject => data[subject].gte4_lt6);
      const lt4 = subjects.map(subject => data[subject].lt4);

      setChartData({
        categories: subjects,
        series: [
          { name: ">=8", data: gte8 },
          { name: "6-8", data: gte6_8 },
          { name: "4-6", data: gte4_6 },
          { name: "<4", data: lt4 },
        ],
      });
    };

    fetchData();
  }, []);

  const formatLargeNumbers = (val: number): string => {
    if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(1)}M`;
    if (val >= 1_000) return `${(val / 1_000).toFixed(0)}K`;
    return `${val}`;
  };

  const options: ApexOptions = {
    colors: ["#2ecc71", "#f1c40f", "#e67e22", "#e74c3c"],
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
      fontFamily: "Outfit, sans-serif",
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: { bar: { columnWidth: "50%" } },
          legend: { position: "bottom", fontSize: "10px" },
          xaxis: { labels: { rotate: -30, style: { fontSize: "10px" } } },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 6,
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 1, colors: ["transparent"] },
    xaxis: {
      categories: chartData.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        rotate: -45,
        style: { fontSize: "12px" },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      fontSize: "14px",
    },
    yaxis: {
      title: { text: "Students" },
      labels: {
        formatter: formatLargeNumbers,
      },
    },
    grid: { yaxis: { lines: { show: true } } },
    tooltip: {
      y: {
        formatter: (val: number) => `${val.toLocaleString()} students`,
      },
    },
  };

  return (
      <ComponentCard title="Score Distribution by Subject">
        <div className="overflow-x-auto">
          <div id="chart" className="min-w-[900px] w-full">
            <Chart options={options} series={chartData.series} type="bar" height={400} />
          </div>
        </div>
      </ComponentCard>
  );
}
