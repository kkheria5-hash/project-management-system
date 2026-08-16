const actions = [
  "Create Project",
  "Create Task",
  "Invite Team Member",
]

function QuickActions() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h2>

      <div className="space-y-3">
        {actions.map((action) => (
          <button
            key={action}
            className="w-full text-left px-4 py-3 rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            + {action}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickActions