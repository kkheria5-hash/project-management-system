import StatCard from "../components/StatCard"
import ProductivityChart from "../components/ProductivityChart"
import RecentActivity from "../components/RecentActivity"
import UpcomingDeadlines from "../components/UpcomingDeadlines"
import QuickActions from "../components/QuickActions"

function Dashboard() {
  return (
    <div className="w-full max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, Krishna! 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Projects"
          value="12"
        />

        <StatCard
          title="Tasks"
          value="48"
        />

        <StatCard
          title="Completed"
          value="32"
        />

        <StatCard
          title="Overdue"
          value="4"
        />
      </div>

      {/* Productivity + Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

        <div className="xl:col-span-2">
          <ProductivityChart />
        </div>

        <div>
          <RecentActivity />
        </div>

      </div>

      {/* Deadlines + Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <UpcomingDeadlines />

        <QuickActions />

      </div>

    </div>
  )
}

export default Dashboard