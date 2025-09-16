"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from "lucide-react"
import { useTranslation } from "./language-provider"

export function TasksList() {
  const { t } = useTranslation()

  const tasks = [
    {
      id: 1,
      title: "Irrigate corn field",
      date: "Today, 10:00 AM",
      completed: false,
    },
    {
      id: 2,
      title: "Apply fertilizer to tomatoes",
      date: "Today, 2:00 PM",
      completed: false,
    },
    {
      id: 3,
      title: "Inspect wheat for pests",
      date: "Tomorrow, 9:00 AM",
      completed: false,
    },
    {
      id: 4,
      title: "Harvest lettuce",
      date: "Tomorrow, 11:00 AM",
      completed: false,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>{t("upcomingTasks")}</CardTitle>
        <Button size="sm" className="ml-auto">
          <Plus className="h-4 w-4 mr-1" />
          {t("addTask")}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start space-x-4">
              <Checkbox id={`task-${task.id}`} />
              <div className="space-y-1">
                <label
                  htmlFor={`task-${task.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {task.title}
                </label>
                <p className="text-xs text-muted-foreground">{task.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          {t("viewAll")}
        </Button>
      </CardFooter>
    </Card>
  )
}

