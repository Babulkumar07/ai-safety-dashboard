interface Props {
  currentFilter: string;
  onFilterChange: (value: string) => void;
  currentSort: string;
  onSortChange: (value: string) => void;
}

const Filters = ({
  currentFilter,
  onFilterChange,
  currentSort,
  onSortChange,
}: Props) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 bg-white/30 backdrop-blur-sm p-4 rounded-xl shadow-inner border border-white/40 transition-all duration-300">
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-indigo-700 mb-1">Filter by Severity</label>
        <select
          className="rounded-xl px-4 py-2 border border-indigo-500 bg-white/60 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={currentFilter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-indigo-700 mb-1">Sort by Date</label>
        <select
          className="rounded-xl px-4 py-2 border border-indigo-500 bg-white/60 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
