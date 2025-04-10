import type { Agent } from "./types"

export const agents: Agent[] = [
  {
    id: "1",
    name: "DataMiner",
    role: "Information Retrieval",
    status: "Online",
    lastActivity: "Processed 3 search queries",
  },
  {
    id: "2",
    name: "CodeCrafter",
    role: "Code Generation",
    status: "Online",
    lastActivity: "Generated React component",
  },
  {
    id: "3",
    name: "TextSynthesizer",
    role: "Content Creation",
    status: "Waiting",
    lastActivity: "Waiting for input data",
  },
  {
    id: "4",
    name: "LogicEngine",
    role: "Decision Making",
    status: "Needs Training",
    lastActivity: "Failed to resolve complex query",
  },
  {
    id: "5",
    name: "PatternAnalyzer",
    role: "Data Analysis",
    status: "Online",
    lastActivity: "Responded to backend request",
  },
]
