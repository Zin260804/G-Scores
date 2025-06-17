import PageBreadcrumb from "../components/common/PageBreadCrumb.tsx";
import BarChartOne from "../components/BarChartOne.tsx";
import PageMeta from "../components/common/PageMeta.tsx";

export default function SubjectCharts() {
  return (
    <div>
      <PageMeta
        title="React.js Chart Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Chart Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Subject-wise Charts" />
      <div className="space-y-6">
          <BarChartOne />
      </div>
    </div>
  );
}
