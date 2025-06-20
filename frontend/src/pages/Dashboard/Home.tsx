import EcommerceMetrics from "../../components/EcommerceMetrics.tsx";
import PageMeta from "../../components/common/PageMeta.tsx";

export default function Home() {
  return (
    <>
      <PageMeta
        title="G-Scores"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
        </div>
      </div>
    </>
  );
}
