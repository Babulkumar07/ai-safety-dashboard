import { useState } from "react";
import { Incident } from "../types/incident";

const IncidentForm = ({ onAdd }: { onAdd: (incident: Incident) => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return alert("All fields are required");

    const newIncident: Incident = {
      id: Date.now(),
      title,
      description,
      severity: severity as "Low" | "Medium" | "High",
      reported_at: new Date().toISOString(),
    };

    onAdd(newIncident);
    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 backdrop-blur-lg-100 p-6 rounded-2xl shadow-md w-full md:w-2/3 lg:w-1/2 border border-gray-200 mx-auto"
    >
      <h3 className="text-xl font-bold text-indigo-700 mb-4">
         Report New Incident
      </h3>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Title</label>
        <input
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          placeholder="Incident Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Description</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          placeholder="Briefly describe the incident..."
          value={description}
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Severity</label>
        <select
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option>Low</option>
          
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
         Submit Incident
      </button>
    </form>
  );
};

export default IncidentForm;
