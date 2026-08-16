const activities = [
  "You completed a task",
  "A new project was created",
  "You were assigned a new task",
  "Project deadline was updated",
]

function RecentActivity() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Activity
      </h2>

      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 border-b pb-3 last:border-b-0"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentActivity