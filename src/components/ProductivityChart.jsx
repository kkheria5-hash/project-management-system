import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Mon", tasks: 4 },
  { day: "Tue", tasks: 7 },
  { day: "Wed", tasks: 5 },
  { day: "Thu", tasks: 8 },
  { day: "Fri", tasks: 6 },
  { day: "Sat", tasks: 9 },
  { day: "Sun", tasks: 7 },
]

function ProductivityChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Productivity
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="tasks"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProductivityChart