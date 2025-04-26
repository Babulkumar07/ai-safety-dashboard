import { useState } from "react";
import { Incident } from "../types/incident";

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High":
      return "bg-red-100 text-red-600 border-red-300";
    case "Medium":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    case "Low":
      return "bg-green-100 text-green-700 border-green-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const IncidentCard = ({ incident }: { incident: Incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-blue-200 transition duration-200">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            alt="User Avatar"
            className="w-14 h-14 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{incident.title}</h2>
            <p className="text-sm text-gray-500">
              Reported: {new Date(incident.reported_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full border ${getSeverityColor(
            incident.severity
          )}`}
        >
          {incident.severity}
        </span>
      </div>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-sm mt-1 px-3 py-1 rounded-lg border border-blue-500 text-blue-600 hover:bg-indigo-600 hover:text-white transition"
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <p className="mt-4 text-gray-700 text-sm leading-relaxed border-t pt-3">
          {incident.description}
        </p>
      )}
    </div>
  );
};

export default IncidentCard;
