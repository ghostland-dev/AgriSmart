"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"
import { useTheme } from "next-themes"

export function GeneralSettings() {
  const { t, language, setLanguage } = useTranslation()
  const { theme, setTheme } = useTheme()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Paramètres généraux</CardTitle>
        <CardDescription>Configurez les paramètres généraux de l'application</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="language">Langue</Label>
          <Select value={language} onValueChange={(value) => setLanguage(value as "fr" | "ar")}>
            <SelectTrigger id="language">
              <SelectValue placeholder="Sélectionner une langue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="ar">العربية (Arabe)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme">Thème</Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger id="theme">
              <SelectValue placeholder="Sélectionner un thème" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Clair</SelectItem>
              <SelectItem value="dark">Sombre</SelectItem>
              <SelectItem value="system">Système</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="units">Unités de mesure</Label>
          <Select defaultValue="metric">
            <SelectTrigger id="units">
              <SelectValue placeholder="Sélectionner des unités" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="metric">Métrique (kg, ha, mm)</SelectItem>
              <SelectItem value="imperial">Impérial (lb, acre, in)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-backup" className="cursor-pointer">
            Sauvegarde automatique des données
          </Label>
          <Switch id="auto-backup" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="offline-mode" className="cursor-pointer">
            Mode hors ligne
          </Label>
          <Switch id="offline-mode" />
        </div>

        <div className="pt-4">
          <Button>Enregistrer les modifications</Button>
        </div>
      </CardContent>
    </Card>
  )
}

