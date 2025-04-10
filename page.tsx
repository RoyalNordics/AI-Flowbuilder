import DashboardLayout from "@/components/dashboard-layout"

export default function FlowsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Flows</h1>
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
          <h2 className="text-xl font-medium text-gray-500 mb-2">Visual Flow Editor</h2>
          <p className="text-gray-400">This area will contain the visual flow editor in a future update.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
