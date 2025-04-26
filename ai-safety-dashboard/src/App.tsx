import { useState } from "react";
import { Incident } from "./types/incident";
import IncidentCard from "./components/IncidentCard";
import IncidentForm from "./components/IncidentForm";
import Filters from "./components/Filters";

const initialData: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
  {
    id: 4,
    title: "Misleading Content Generator",
    description: "AI generated convincing but false news articles during an election...",
    severity: "High",
    reported_at: "2025-04-10T09:00:00Z",
  },
  {
    id: 5,
    title: "Facial Recognition Misidentification",
    description: "System wrongly flagged innocent individual as a suspect in surveillance footage.",
    severity: "Medium",
    reported_at: "2025-02-27T08:20:00Z",
  },
  {
    id: 6,
    title: "Inappropriate Content in AI Chatbot",
    description: "AI chatbot provided responses with offensive language under stress-testing.",
    severity: "Low",
    reported_at: "2025-04-05T13:45:00Z",
  },
];

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(initialData);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const addIncident = (incident: Incident) => {
    setIncidents((prev) => [incident, ...prev]);
  };

  const filtered = incidents.filter(i =>
    filter === "All" ? true : i.severity === filter
  );

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "Newest"
      ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
      : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="mx-auto rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          🚨 AI Safety Incident Dashboard
        </h1>

        <div className="flex justify-center w-full mb-10">
          <Filters
            currentFilter={filter}
            onFilterChange={setFilter}
            currentSort={sortOrder}
            onSortChange={setSortOrder}
          />
        </div>
        <div className="mb-10">
          <IncidentForm onAdd={addIncident} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((incident) => (
            <IncidentCard key={incident.id} incident={incident} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
