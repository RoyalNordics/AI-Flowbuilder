import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Agent } from "@/lib/types"

interface AgentStatusCardProps {
  agent: Agent
}

export default function AgentStatusCard({ agent }: AgentStatusCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-medium text-lg">{agent.name}</h3>
            <p className="text-gray-500 text-sm">{agent.role}</p>
          </div>
          <StatusBadge status={agent.status} />
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Last activity:</span> {agent.lastActivity}
          </p>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-3">
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

function StatusBadge({ status }: { status: string }) {
  let bgColor = "bg-gray-100"
  let textColor = "text-gray-800"

  switch (status) {
    case "Online":
      bgColor = "bg-green-100"
      textColor = "text-green-800"
      break
    case "Waiting":
      bgColor = "bg-yellow-100"
      textColor = "text-yellow-800"
      break
    case "Needs Training":
      bgColor = "bg-red-100"
      textColor = "text-red-800"
      break
  }

  return <span className={`${bgColor} ${textColor} text-xs px-2.5 py-0.5 rounded-full font-medium`}>{status}</span>
}
