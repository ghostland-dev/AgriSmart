"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { CloudLightning, CloudRain, Thermometer, Wind, Bell } from "lucide-react"
import { useTranslation } from "./language-provider"

export function WeatherAlerts() {
  const { t } = useTranslation()

  // Sample alerts
  const alerts = [
    {
      id: 1,
      type: "rain",
      icon: <CloudRain className="h-5 w-5" />,
      title: "Fortes précipitations",
      description: "Prévision de 25mm de pluie demain",
      time: "Demain, 10:00 - 16:00",
      severity: "medium",
    },
    {
      id: 2,
      type: "storm",
      icon: <CloudLightning className="h-5 w-5" />,
      title: "Risque d'orage",
      description: "Orages possibles avec risque de grêle",
      time: "Jeudi, 14:00 - 20:00",
      severity: "high",
    },
  ]

  // Alert settings
  const alertSettings = [
    { id: "rain", label: "Précipitations", enabled: true },
    { id: "temperature", label: "Température", enabled: true },
    { id: "wind", label: "Vent", enabled: true },
    { id: "storm", label: "Orages", enabled: true },
    { id: "frost", label: "Gel", enabled: true },
  ]

  // Function to get severity badge
  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "low":
        return <Badge variant="outline">Faible</Badge>
      case "medium":
        return <Badge variant="secondary">Moyen</Badge>
      case "high":
        return <Badge variant="destructive">Élevé</Badge>
      default:
        return <Badge variant="outline">{severity}</Badge>
    }
  }

  // Function to get alert icon
  const getAlertIcon = (type) => {
    switch (type) {
      case "rain":
        return <CloudRain className="h-10 w-10 text-blue-500" />
      case "storm":
        return <CloudLightning className="h-10 w-10 text-purple-500" />
      case "temperature":
        return <Thermometer className="h-10 w-10 text-red-500" />
      case "wind":
        return <Wind className="h-10 w-10 text-cyan-500" />
      default:
        return <Bell className="h-10 w-10 text-gray-500" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alertes météo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {alerts.length > 0 ? (
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start p-4 border rounded-lg">
                  <div className="mr-4">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{alert.title}</h3>
                      {getSeverityBadge(alert.severity)}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Bell className="h-10 w-10 mx-auto mb-2" />
              <p>Aucune alerte météo active</p>
            </div>
          )}

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-4">Paramètres des alertes</h3>
            <div className="space-y-3">
              {alertSettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <Label htmlFor={`alert-${setting.id}`} className="cursor-pointer">
                    {setting.label}
                  </Label>
                  <Switch id={`alert-${setting.id}`} defaultChecked={setting.enabled} />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-2">Seuils d'alerte</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Configurez les seuils à partir desquels vous souhaitez recevoir des alertes.
            </p>
            <Button variant="outline" size="sm">
              Configurer les seuils
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

