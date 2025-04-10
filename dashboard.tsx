import { Card, CardContent } from "@/components/ui/card"
import AgentStatusCard from "./agent-status-card"
import { agents } from "@/lib/data"

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Agent Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <AgentStatusCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Recent Activities</h3>
            <p className="text-gray-500">No recent activities to display.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">System Status</h3>
            <p className="text-gray-500">All systems operational.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
