"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, CloudRain, Sun, Wind, Droplets, AlertTriangle } from "lucide-react"
import { useTranslation } from "./language-provider"

export function WeatherPredictions() {
  const { t } = useTranslation()

  // Sample weather prediction data
  const weatherPredictions = [
    {
      day: "Aujourd'hui",
      date: "20 juin",
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      condition: "Ensoleillé",
      high: 28,
      low: 18,
      precipitation: 0,
      humidity: 45,
      wind: 10,
      alert: null,
    },
    {
      day: "Demain",
      date: "21 juin",
      icon: <Cloud className="h-8 w-8 text-gray-500" />,
      condition: "Nuageux",
      high: 25,
      low: 17,
      precipitation: 10,
      humidity: 60,
      wind: 15,
      alert: null,
    },
    {
      day: "Mercredi",
      date: "22 juin",
      icon: <CloudRain className="h-8 w-8 text-blue-500" />,
      condition: "Pluie",
      high: 22,
      low: 16,
      precipitation: 70,
      humidity: 80,
      wind: 20,
      alert: {
        type: "rain",
        message: "Fortes précipitations prévues (25mm)",
        severity: "medium",
      },
    },
    {
      day: "Jeudi",
      date: "23 juin",
      icon: <CloudRain className="h-8 w-8 text-blue-500" />,
      condition: "Pluie",
      high: 20,
      low: 15,
      precipitation: 80,
      humidity: 85,
      wind: 25,
      alert: {
        type: "wind",
        message: "Vents forts prévus (25 km/h)",
        severity: "medium",
      },
    },
    {
      day: "Vendredi",
      date: "24 juin",
      icon: <CloudRain className="h-8 w-8 text-blue-500" />,
      condition: "Pluie",
      high: 21,
      low: 14,
      precipitation: 60,
      humidity: 75,
      wind: 18,
      alert: null,
    },
  ]

  // Sample crop impact data
  const cropImpacts = [
    {
      crop: "Maïs",
      impact: "Positif",
      details: "Les précipitations prévues seront bénéfiques pour la croissance du maïs.",
    },
    {
      crop: "Blé",
      impact: "Neutre",
      details: "Pas d'impact significatif prévu sur le blé.",
    },
    {
      crop: "Tomates",
      impact: "Négatif",
      details: "L'excès d'humidité pourrait favoriser le développement de maladies fongiques.",
    },
    {
      crop: "Soja",
      impact: "Positif",
      details: "Les précipitations prévues seront bénéfiques pour la croissance du soja.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prévisions météorologiques avancées</CardTitle>
        <CardDescription>Prévisions météo à 10 jours avec analyse d'impact sur les cultures</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="forecast">
          <TabsList className="mb-4">
            <TabsTrigger value="forecast">Prévisions</TabsTrigger>
            <TabsTrigger value="impact">Impact sur les cultures</TabsTrigger>
            <TabsTrigger value="alerts">Alertes</TabsTrigger>
          </TabsList>

          <TabsContent value="forecast">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="location-select">Localisation</Label>
                  <Select defaultValue="farm">
                    <SelectTrigger id="location-select" className="w-[180px]">
                      <SelectValue placeholder="Sélectionner un lieu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farm">Exploitation</SelectItem>
                      <SelectItem value="field-a">Parcelle A</SelectItem>
                      <SelectItem value="field-b">Parcelle B</SelectItem>
                      <SelectItem value="field-c">Parcelle C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="sm">
                  Actualiser
                </Button>
              </div>

              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 min-w-max">
                  {weatherPredictions.map((day, index) => (
                    <div key={index} className="w-[140px] border rounded-md p-3 flex flex-col items-center">
                      <div className="text-sm font-medium">{day.day}</div>
                      <div className="text-xs text-muted-foreground">{day.date}</div>
                      <div className="my-2">{day.icon}</div>
                      <div className="text-sm">{day.condition}</div>
                      <div className="flex justify-center gap-2 mt-1">
                        <span className="font-medium">{day.high}°</span>
                        <span className="text-muted-foreground">{day.low}°</span>
                      </div>

                      <div className="w-full mt-3 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center">
                            <CloudRain className="h-3 w-3 mr-1 text-blue-500" />
                            <span>Précip.</span>
                          </div>
                          <span>{day.precipitation}%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center">
                            <Droplets className="h-3 w-3 mr-1 text-blue-500" />
                            <span>Humidité</span>
                          </div>
                          <span>{day.humidity}%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center">
                            <Wind className="h-3 w-3 mr-1 text-cyan-500" />
                            <span>Vent</span>
                          </div>
                          <span>{day.wind} km/h</span>
                        </div>
                      </div>

                      {day.alert && (
                        <div className="mt-2 w-full p-1 bg-amber-50 border border-amber-200 rounded-sm flex items-center">
                          <AlertTriangle className="h-3 w-3 text-amber-500 mr-1 flex-shrink-0" />
                          <span className="text-xs text-amber-800 truncate">{day.alert.message}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 border rounded-md bg-blue-50">
                <h3 className="text-sm font-medium text-blue-800 flex items-center">
                  <Droplets className="h-4 w-4 mr-1" />
                  Prévisions d'irrigation
                </h3>
                <p className="text-xs text-blue-700 mt-1">
                  Avec les précipitations prévues, l'irrigation peut être réduite de 30% cette semaine. Économie d'eau
                  estimée: 45 000 litres.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Impact prévu sur les cultures</h3>
                <Select defaultValue="week">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Période" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Cette semaine</SelectItem>
                    <SelectItem value="twoweeks">2 semaines</SelectItem>
                    <SelectItem value="month">1 mois</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                {cropImpacts.map((crop, index) => (
                  <div key={index} className="border rounded-md p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{crop.crop}</h4>
                      <div
                        className={`text-sm font-medium ${
                          crop.impact === "Positif"
                            ? "text-green-600"
                            : crop.impact === "Négatif"
                              ? "text-red-600"
                              : "text-gray-600"
                        }`}
                      >
                        {crop.impact}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{crop.details}</p>
                  </div>
                ))}
              </div>

              <div className="p-3 border rounded-md bg-green-50">
                <h3 className="text-sm font-medium text-green-800">Recommandations</h3>
                <ul className="mt-1 space-y-1">
                  <li className="text-xs text-green-700 flex items-start">
                    <div className="rounded-full w-1.5 h-1.5 bg-green-500 mt-1 mr-1.5"></div>
                    <span>Réduire l'irrigation sur les parcelles de maïs et de soja</span>
                  </li>
                  <li className="text-xs text-green-700 flex items-start">
                    <div className="rounded-full w-1.5 h-1.5 bg-green-500 mt-1 mr-1.5"></div>
                    <span>Surveiller les tomates pour détecter les signes de maladies fongiques</span>
                  </li>
                  <li className="text-xs text-green-700 flex items-start">
                    <div className="rounded-full w-1.5 h-1.5 bg-green-500 mt-1 mr-1.5"></div>
                    <span>Planifier les travaux extérieurs pour les jours ensoleillés</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="alerts">
            <div className="space-y-4">
              <div className="border rounded-md p-3 bg-amber-50">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <h3 className="font-medium text-amber-800">Alerte de précipitations</h3>
                </div>
                <p className="text-sm text-amber-700 mb-2">Fortes précipitations prévues le mercredi 22 juin (25mm).</p>
                <div className="text-xs text-amber-700">
                  <div className="font-medium mb-1">Impacts potentiels:</div>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1 mr-1.5"></div>
                      <span>Risque d'érosion sur les parcelles en pente</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1 mr-1.5"></div>
                      <span>Saturation possible des sols dans les zones basses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1 mr-1.5"></div>
                      <span>Retard possible pour les travaux agricoles prévus</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-3 bg-amber-50">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <h3 className="font-medium text-amber-800">Alerte de vent</h3>
                </div>
                <p className="text-sm text-amber-700 mb-2">Vents forts prévus le jeudi 23 juin (25 km/h).</p>
                <div className="text-xs text-amber-700">
                  <div className="font-medium mb-1">Impacts potentiels:</div>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1 mr-1.5"></div>
                      <span>Risque de verse pour les céréales hautes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1 mr-1.5"></div>
                      <span>Éviter la pulvérisation de produits phytosanitaires</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1 mr-1.5"></div>
                      <span>Vérifier la sécurité des structures légères (serres, abris)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  Configurer les alertes
                </Button>
                <Button size="sm">Marquer comme lu</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

