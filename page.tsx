import DashboardLayout from "@/components/dashboard-layout"

export default function LogsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Logs</h1>
        <p className="text-gray-500">View system logs and agent activities.</p>
      </div>
    </DashboardLayout>
  )
}
