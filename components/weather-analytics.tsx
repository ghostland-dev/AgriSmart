"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Thermometer } from "lucide-react"
import { useTranslation } from "./language-provider"

export function WeatherAnalytics() {
  const { t } = useTranslation()

  // Sample weather correlation data
  const correlationData = [
    { factor: "Précipitations", correlation: 0.75, impact: "positive" },
    { factor: "Température", correlation: 0.45, impact: "positive" },
    { factor: "Humidité", correlation: 0.3, impact: "positive" },
    { factor: "Vent", correlation: -0.25, impact: "negative" },
  ]

  // Sample monthly precipitation data
  const precipitationData = [
    { month: "Jan", value: 45, average: 50 },
    { month: "Fév", value: 40, average: 45 },
    { month: "Mar", value: 55, average: 50 },
    { month: "Avr", value: 65, average: 60 },
    { month: "Mai", value: 70, average: 65 },
    { month: "Juin", value: 60, average: 60 },
    { month: "Juil", value: 40, average: 50 },
    { month: "Août", value: 35, average: 45 },
    { month: "Sep", value: 50, average: 55 },
    { month: "Oct", value: 65, average: 60 },
    { month: "Nov", value: 60, average: 55 },
    { month: "Déc", value: 55, average: 50 },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Analyse météorologique</CardTitle>
        <Button variant="outline" size="sm" className="ml-auto">
          <Download className="h-4 w-4 mr-2" />
          Exporter
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="correlation">
          <TabsList className="mb-4">
            <TabsTrigger value="correlation">Corrélation</TabsTrigger>
            <TabsTrigger value="precipitation">Précipitations</TabsTrigger>
            <TabsTrigger value="temperature">Température</TabsTrigger>
          </TabsList>

          <TabsContent value="correlation" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-weather-select">Culture</Label>
                <Select defaultValue="corn">
                  <SelectTrigger id="crop-weather-select">
                    <SelectValue placeholder="Sélectionner une culture" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corn">Maïs</SelectItem>
                    <SelectItem value="wheat">Blé</SelectItem>
                    <SelectItem value="soybean">Soja</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year-weather-select">Période</Label>
                <Select defaultValue="5years">
                  <SelectTrigger id="year-weather-select">
                    <SelectValue placeholder="Sélectionner une période" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3years">3 dernières années</SelectItem>
                    <SelectItem value="5years">5 dernières années</SelectItem>
                    <SelectItem value="10years">10 dernières années</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-sm font-medium mb-2">Corrélation entre facteurs météo et rendement</div>
              <div className="space-y-3">
                {correlationData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.factor}</span>
                      <span className={item.impact === "positive" ? "text-green-500" : "text-red-500"}>
                        {item.correlation > 0 ? "+" : ""}
                        {item.correlation.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.impact === "positive" ? "bg-green-500" : "bg-red-500"}`}
                        style={{ width: `${Math.abs(item.correlation) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Interprétation</h4>
              <p className="text-sm">
                Les précipitations montrent la corrélation la plus forte avec le rendement du maïs (+0.75), suivies par
                la température (+0.45). Le vent a un impact négatif modéré (-0.25). Ces données suggèrent que
                l'irrigation optimisée pendant les périodes sèches pourrait significativement améliorer les rendements.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="precipitation" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year-precip-select">Année</Label>
                <Select defaultValue="2023">
                  <SelectTrigger id="year-precip-select">
                    <SelectValue placeholder="Sélectionner une année" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="station-precip-select">Station</Label>
                <Select defaultValue="main">
                  <SelectTrigger id="station-precip-select">
                    <SelectValue placeholder="Sélectionner une station" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Station principale</SelectItem>
                    <SelectItem value="north">Parcelle Nord</SelectItem>
                    <SelectItem value="south">Parcelle Sud</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-sm font-medium mb-2">Précipitations mensuelles (mm)</div>
              <div className="h-[200px] flex items-end gap-1">
                {precipitationData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="relative w-full">
                      <div
                        className="absolute bottom-0 w-full bg-blue-200 rounded-t-sm"
                        style={{ height: `${(item.average / 70) * 100}%` }}
                      ></div>
                      <div
                        className="relative w-full bg-blue-500 rounded-t-sm"
                        style={{ height: `${(item.value / 70) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs mt-1">{item.month}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500"></div>
                  <span className="text-xs">2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-200"></div>
                  <span className="text-xs">Moyenne sur 10 ans</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Total annuel</div>
                  <div className="text-2xl font-bold">640 mm</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Écart / moyenne</div>
                  <div className="text-2xl font-bold text-amber-500">-5%</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Analyse</h4>
              <p className="text-sm">
                L'année 2023 a connu un déficit de précipitations en juillet et août, période critique pour le
                développement du maïs. L'irrigation supplémentaire appliquée pendant cette période a permis de maintenir
                les rendements malgré ce déficit.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="temperature" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year-temp-select">Année</Label>
                <Select defaultValue="2023">
                  <SelectTrigger id="year-temp-select">
                    <SelectValue placeholder="Sélectionner une année" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="station-temp-select">Station</Label>
                <Select defaultValue="main">
                  <SelectTrigger id="station-temp-select">
                    <SelectValue placeholder="Sélectionner une station" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Station principale</SelectItem>
                    <SelectItem value="north">Parcelle Nord</SelectItem>
                    <SelectItem value="south">Parcelle Sud</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4 text-center">
              <div className="text-sm font-medium mb-2">Analyse des températures en cours de développement...</div>
              <Thermometer className="h-16 w-16 mx-auto text-red-500 my-8" />
              <p className="text-sm text-muted-foreground">
                Cette fonctionnalité sera disponible dans la prochaine mise à jour.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

