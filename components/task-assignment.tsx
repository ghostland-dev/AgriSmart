"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "./language-provider"

export function TaskAssignment() {
  const { t } = useTranslation()

  // Sample worker assignments data
  const workerAssignments = [
    {
      id: 1,
      name: "Ahmed Benali",
      role: "Responsable de culture",
      avatar: "/placeholder.svg",
      initials: "AB",
      tasks: [{ id: 1, title: "Irriguer le champ de maïs", status: "pending", dueDate: "2023-06-20" }],
      progress: 75,
    },
    {
      id: 2,
      name: "Marie Dubois",
      role: "Technicien agricole",
      avatar: "/placeholder.svg",
      initials: "MD",
      tasks: [
        { id: 2, title: "Appliquer l'engrais azoté", status: "pending", dueDate: "2023-06-21" },
        { id: 5, title: "Maintenance du tracteur", status: "pending", dueDate: "2023-06-25" },
      ],
      progress: 60,
    },
    {
      id: 3,
      name: "Karim Alaoui",
      role: "Ouvrier agricole",
      avatar: "/placeholder.svg",
      initials: "KA",
      tasks: [
        {
          id: 3,
          title: "Inspecter les cultures pour détecter les parasites",
          status: "completed",
          dueDate: "2023-06-19",
        },
      ],
      progress: 100,
    },
    {
      id: 4,
      name: "Sophie Martin",
      role: "Ouvrier agricole",
      avatar: "/placeholder.svg",
      initials: "SM",
      tasks: [{ id: 4, title: "Récolter la laitue", status: "pending", dueDate: "2023-06-22" }],
      progress: 40,
    },
  ]

  // Function to get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Terminée</Badge>
      case "in_progress":
        return <Badge variant="secondary">En cours</Badge>
      case "pending":
        return <Badge variant="outline">En attente</Badge>
      case "overdue":
        return <Badge variant="destructive">En retard</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assignation des tâches</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {workerAssignments.map((worker) => (
            <div key={worker.id} className="space-y-2">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={worker.avatar} alt={worker.name} />
                  <AvatarFallback>{worker.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{worker.name}</div>
                  <div className="text-xs text-muted-foreground">{worker.role}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm font-medium">{worker.tasks.length} tâches</div>
                  <div className="text-xs text-muted-foreground">
                    {worker.tasks.filter((t) => t.status === "completed").length} terminées
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Progression</span>
                  <span>{worker.progress}%</span>
                </div>
                <Progress value={worker.progress} className="h-2" />
              </div>

              <div className="space-y-2 pt-2">
                {worker.tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-2 border rounded-md">
                    <div className="text-sm">{task.title}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-muted-foreground">{task.dueDate}</div>
                      {getStatusBadge(task.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

