"use client"

import { Sprout, CheckSquare, Tractor, CloudLightning } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "./language-provider"

export function DashboardCards() {
  const { t } = useTranslation()

  const cards = [
    {
      title: t("totalCrops"),
      value: "12",
      icon: <Sprout className="h-5 w-5" />,
      description: "4 " + t("active"),
    },
    {
      title: t("activeTasks"),
      value: "8",
      icon: <CheckSquare className="h-5 w-5" />,
      description: "3 " + t("today"),
    },
    {
      title: t("equipmentStatus"),
      value: "5/6",
      icon: <Tractor className="h-5 w-5" />,
      description: "1 " + t("maintenance"),
    },
    {
      title: t("weatherAlerts"),
      value: "2",
      icon: <CloudLightning className="h-5 w-5" />,
      description: t("rainfall") + " " + t("expected"),
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">{card.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

