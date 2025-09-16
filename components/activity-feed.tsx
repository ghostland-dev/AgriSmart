"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "./language-provider"

export function ActivityFeed() {
  const { t } = useTranslation()

  // Sample activity data
  const activities = [
    {
      id: 1,
      user: { name: "Ahmed B.", avatar: "/placeholder.svg?height=32&width=32" },
      action: "a terminé",
      subject: "Irrigation du maïs",
      timestamp: "Il y a 35 minutes",
      type: "task",
    },
    {
      id: 2,
      user: { name: "Marie D.", avatar: "/placeholder.svg?height=32&width=32" },
      action: "a ajouté",
      subject: "50kg d'engrais NPK à l'inventaire",
      timestamp: "Il y a 2 heures",
      type: "inventory",
    },
    {
      id: 3,
      user: { name: "Système", avatar: "/placeholder.svg?height=32&width=32" },
      action: "a détecté",
      subject: "Faible humidité du sol dans la Parcelle B",
      timestamp: "Il y a 3 heures",
      type: "alert",
    },
    {
      id: 4,
      user: { name: "Karim A.", avatar: "/placeholder.svg?height=32&width=32" },
      action: "a commencé",
      subject: "Récolte de la laitue",
      timestamp: "Il y a 5 heures",
      type: "task",
    },
    {
      id: 5,
      user: { name: "Sophie M.", avatar: "/placeholder.svg?height=32&width=32" },
      action: "a planifié",
      subject: "Semis de soja pour la semaine prochaine",
      timestamp: "Hier, 16:30",
      type: "planning",
    },
  ]

  // Function to get badge for activity type
  const getActivityBadge = (type: string) => {
    switch (type) {
      case "task":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Tâche
          </Badge>
        )
      case "inventory":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Inventaire
          </Badge>
        )
      case "alert":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Alerte
          </Badge>
        )
      case "planning":
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
            Planification
          </Badge>
        )
      default:
        return <Badge variant="outline">Activité</Badge>
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Activités récentes</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all">Tout</TabsTrigger>
            <TabsTrigger value="tasks">Tâches</TabsTrigger>
            <TabsTrigger value="alerts">Alertes</TabsTrigger>
            <TabsTrigger value="inventory">Inventaire</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-3 last:pb-0 border-b last:border-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                  <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <p className="text-sm font-medium">{activity.subject}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    {getActivityBadge(activity.type)}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            {activities
              .filter((activity) => activity.type === "task")
              .map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-3 last:pb-0 border-b last:border-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                    <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <p className="text-sm font-medium">{activity.subject}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      {getActivityBadge(activity.type)}
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            {activities
              .filter((activity) => activity.type === "alert")
              .map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-3 last:pb-0 border-b last:border-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                    <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <p className="text-sm font-medium">{activity.subject}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      {getActivityBadge(activity.type)}
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            {activities
              .filter((activity) => activity.type === "inventory")
              .map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-3 last:pb-0 border-b last:border-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                    <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <p className="text-sm font-medium">{activity.subject}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      {getActivityBadge(activity.type)}
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
        </Tabs>

        <Button variant="ghost" className="w-full mt-4 text-sm">
          Voir toutes les activités
        </Button>
      </CardContent>
    </Card>
  )
}

