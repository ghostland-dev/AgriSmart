import { TaskManagement } from "@/components/task-management"
import { TaskCalendar } from "@/components/task-calendar"
import { TaskAssignment } from "@/components/task-assignment"

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Gestion des tâches</h1>
      <TaskManagement />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TaskCalendar />
        <TaskAssignment />
      </div>
    </div>
  )
}

