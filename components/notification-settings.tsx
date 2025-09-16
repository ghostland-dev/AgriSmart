"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"

export function NotificationSettings() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Paramètres de notification</CardTitle>
        <CardDescription>Configurez comment et quand vous recevez des notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Notifications par e-mail</h3>

          <div className="flex items-center justify-between">
            <Label htmlFor="email-tasks" className="cursor-pointer">
              Tâches assignées
            </Label>
            <Switch id="email-tasks" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="email-weather" className="cursor-pointer">
              Alertes météo
            </Label>
            <Switch id="email-weather" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="email-inventory" className="cursor-pointer">
              Alertes d'inventaire
            </Label>
            <Switch id="email-inventory" defaultChecked />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Notifications dans l'application</h3>

          <div className="flex items-center justify-between">
            <Label htmlFor="app-tasks" className="cursor-pointer">
              Tâches assignées
            </Label>
            <Switch id="app-tasks" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="app-weather" className="cursor-pointer">
              Alertes météo
            </Label>
            <Switch id="app-weather" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="app-inventory" className="cursor-pointer">
              Alertes d'inventaire
            </Label>
            <Switch id="app-inventory" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="app-analytics" className="cursor-pointer">
              Rapports d'analyse
            </Label>
            <Switch id="app-analytics" defaultChecked />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notification-frequency">Fréquence des notifications</Label>
          <Select defaultValue="realtime">
            <SelectTrigger id="notification-frequency">
              <SelectValue placeholder="Sélectionner une fréquence" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realtime">Temps réel</SelectItem>
              <SelectItem value="hourly">Toutes les heures</SelectItem>
              <SelectItem value="daily">Quotidien</SelectItem>
              <SelectItem value="weekly">Hebdomadaire</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4">
          <Button>Enregistrer les modifications</Button>
        </div>
      </CardContent>
    </Card>
  )
}

