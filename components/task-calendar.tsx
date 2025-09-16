"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "./language-provider"

export function TaskCalendar() {
  const { t } = useTranslation()

  // Sample calendar data
  const currentMonth = "Juin 2023"
  const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

  // Sample calendar days with tasks
  const calendarDays = [
    { day: 29, isCurrentMonth: false, tasks: [] },
    { day: 30, isCurrentMonth: false, tasks: [] },
    { day: 31, isCurrentMonth: false, tasks: [] },
    { day: 1, isCurrentMonth: true, tasks: [] },
    { day: 2, isCurrentMonth: true, tasks: [] },
    { day: 3, isCurrentMonth: true, tasks: [] },
    { day: 4, isCurrentMonth: true, tasks: [] },
    { day: 5, isCurrentMonth: true, tasks: [] },
    { day: 6, isCurrentMonth: true, tasks: [] },
    { day: 7, isCurrentMonth: true, tasks: [] },
    { day: 8, isCurrentMonth: true, tasks: [] },
    { day: 9, isCurrentMonth: true, tasks: [] },
    { day: 10, isCurrentMonth: true, tasks: [] },
    { day: 11, isCurrentMonth: true, tasks: [] },
    { day: 12, isCurrentMonth: true, tasks: [] },
    { day: 13, isCurrentMonth: true, tasks: [] },
    { day: 14, isCurrentMonth: true, tasks: [] },
    { day: 15, isCurrentMonth: true, tasks: [] },
    { day: 16, isCurrentMonth: true, tasks: [] },
    { day: 17, isCurrentMonth: true, tasks: [] },
    { day: 18, isCurrentMonth: true, tasks: [] },
    { day: 19, isCurrentMonth: true, tasks: [{ title: "Inspection des cultures", category: "inspection" }] },
    { day: 20, isCurrentMonth: true, tasks: [{ title: "Irrigation du maïs", category: "irrigation" }], isToday: true },
    { day: 21, isCurrentMonth: true, tasks: [{ title: "Application d'engrais", category: "fertilization" }] },
    { day: 22, isCurrentMonth: true, tasks: [{ title: "Récolte de la laitue", category: "harvest" }] },
    { day: 23, isCurrentMonth: true, tasks: [] },
    { day: 24, isCurrentMonth: true, tasks: [] },
    { day: 25, isCurrentMonth: true, tasks: [{ title: "Maintenance du tracteur", category: "maintenance" }] },
    { day: 26, isCurrentMonth: true, tasks: [] },
    { day: 27, isCurrentMonth: true, tasks: [] },
    { day: 28, isCurrentMonth: true, tasks: [] },
    { day: 29, isCurrentMonth: true, tasks: [] },
    { day: 30, isCurrentMonth: true, tasks: [] },
    { day: 1, isCurrentMonth: false, tasks: [] },
    { day: 2, isCurrentMonth: false, tasks: [] },
  ]

  // Function to get task category color
  const getTaskCategoryColor = (category) => {
    switch (category) {
      case "irrigation":
        return "bg-blue-500"
      case "fertilization":
        return "bg-green-500"
      case "inspection":
        return "bg-amber-500"
      case "harvest":
        return "bg-red-500"
      case "maintenance":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Calendrier des tâches</CardTitle>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Mois précédent</span>
          </Button>
          <Select defaultValue="june">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sélectionner un mois" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="june">Juin 2023</SelectItem>
              <SelectItem value="july">Juillet 2023</SelectItem>
              <SelectItem value="august">Août 2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Mois suivant</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center text-xs font-medium py-1">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`min-h-[80px] p-1 border rounded-md text-xs ${
                !day.isCurrentMonth ? "bg-muted text-muted-foreground" : day.isToday ? "border-primary" : ""
              }`}
            >
              <div className="font-medium mb-1">{day.day}</div>
              <div className="space-y-1">
                {day.tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className={`px-1 py-0.5 rounded text-white truncate ${getTaskCategoryColor(task.category)}`}
                    title={task.title}
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs">Irrigation</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs">Fertilisation</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-xs">Inspection</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs">Récolte</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-xs">Maintenance</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

