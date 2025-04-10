import DashboardLayout from "@/components/dashboard-layout"

export default function AgentsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Agents</h1>
        <p className="text-gray-500">Manage your AI agents here.</p>
      </div>
    </DashboardLayout>
  )
}
