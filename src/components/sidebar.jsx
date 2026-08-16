import { NavLink } from "react-router-dom"

import {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  Bot,
  Users,
  CalendarDays,
  BarChart3,
  Bell,
  Files,
  Settings,
} from "lucide-react"

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Tasks", path: "/tasks", icon: ListTodo },
  { name: "AI Assistant", path: "/ai-assistant", icon: Bot },
  { name: "Team", path: "/team", icon: Users },
  { name: "Calendar", path: "/calendar", icon: CalendarDays },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Notifications", path: "/notifications", icon: Bell },
  { name: "Files", path: "/files", icon: Files },
  { name: "Settings", path: "/settings", icon: Settings },
]

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">
        Where's My INTERN 
      </h1>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                    isActive
                 ? "bg-blue-600 text-white"
                 : "hover:bg-gray-700"
                     }`
}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar