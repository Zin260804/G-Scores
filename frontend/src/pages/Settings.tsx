
import PageBreadcrumb from "../components/common/PageBreadCrumb.tsx";
import PageMeta from "../components/common/PageMeta.tsx";
import ComponentCard from "../components/common/ComponentCard.tsx";
import Alert from "../components/Alert.tsx";


export default function Settings() {
  return (
    <>
      <PageMeta
        title="React.js Settings Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Settings Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Settings" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Success Alert">
          <Alert
            variant="success"
            title="Success Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </ComponentCard>
      </div>
    </>
  );
}
