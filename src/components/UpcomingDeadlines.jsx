const deadlines = [
  { project: "Website Redesign", date: "Tomorrow" },
  { project: "Mobile App", date: "Friday" },
  { project: "AI Dashboard", date: "Next Monday" },
]

function UpcomingDeadlines() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Upcoming Deadlines
      </h2>

      <div className="space-y-4">
        {deadlines.map((deadline) => (
          <div
            key={deadline.project}
            className="flex items-center justify-between border-b pb-3 last:border-b-0"
          >
            <span className="text-sm text-gray-700">
              {deadline.project}
            </span>

            <span className="text-sm font-medium text-blue-600">
              {deadline.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingDeadlines