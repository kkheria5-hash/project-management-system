import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar"

import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Tasks from "./pages/Tasks"
import AIAssistant from "./pages/AIAssistant"
import Team from "./pages/Team"
import Calendar from "./pages/Calendar"
import Analytics from "./pages/Analytics"
import Notifications from "./pages/Notifications"
import Files from "./pages/Files"
import Settings from "./pages/Settings"

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />

        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/files" element={<Files />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App