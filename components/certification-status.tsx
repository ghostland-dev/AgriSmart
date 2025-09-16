"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Clock, FileText } from "lucide-react"
import { useTranslation } from "./language-provider"

export function CertificationStatus() {
  const { t } = useTranslation()

  // Sample certification data
  const certifications = [
    {
      name: "Agriculture Biologique",
      status: "active",
      progress: 100,
      expiry: "31/12/2023",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
    },
    {
      name: "Haute Valeur Environnementale",
      status: "active",
      progress: 100,
      expiry: "14/02/2026",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
    },
    {
      name: "Global G.A.P.",
      status: "pending",
      progress: 60,
      expiry: "En attente",
      icon: <Clock className="h-4 w-4 text-amber-500" />,
    },
    {
      name: "Label Rouge",
      status: "not_started",
      progress: 0,
      expiry: "Non applicable",
      icon: <AlertCircle className="h-4 w-4 text-gray-400" />,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statut des certifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {cert.icon}
                  <span className="font-medium text-sm">{cert.name}</span>
                </div>
                <Badge
                  variant={cert.status === "active" ? "default" : cert.status === "pending" ? "secondary" : "outline"}
                >
                  {cert.status === "active" ? "Actif" : cert.status === "pending" ? "En cours" : "Non démarré"}
                </Badge>
              </div>
              <Progress value={cert.progress} className="h-2" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Expiration: {cert.expiry}</span>
                <span>{cert.progress}% complété</span>
              </div>
            </div>
          ))}

          <Button variant="outline" size="sm" className="w-full mt-2">
            <FileText className="h-4 w-4 mr-2" />
            Gérer les certifications
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

