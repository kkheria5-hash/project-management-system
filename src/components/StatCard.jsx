function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        {value}
      </h2>
    </div>
  )
}

export default StatCard