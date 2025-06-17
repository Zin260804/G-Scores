import PageBreadcrumb from "../components/common/PageBreadCrumb.tsx";
import DefaultInputs from "../components/DefaultInputs.tsx";
import PageMeta from "../components/common/PageMeta.tsx";


export default function SearchScores() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Search Scores" />
      <div className="space-y-5 sm:space-y-6">
        <div className="space-y-6">
          <DefaultInputs />
        </div>
      </div>
    </div>
  );
}
