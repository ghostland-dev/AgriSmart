"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Droplets, Thermometer, FlaskRoundIcon as Flask } from "lucide-react"
import { useTranslation } from "./language-provider"

export function SoilMonitoring() {
  const { t } = useTranslation()

  // Sample soil data
  const soilData = {
    moisture: {
      current: 45,
      optimal: { min: 40, max: 60 },
      history: [42, 40, 38, 35, 32, 45, 48],
    },
    temperature: {
      current: 18,
      optimal: { min: 15, max: 25 },
      history: [16, 17, 17, 18, 19, 18, 18],
    },
    ph: {
      current: 6.5,
      optimal: { min: 6.0, max: 7.0 },
      history: [6.4, 6.4, 6.5, 6.5, 6.6, 6.5, 6.5],
    },
    nutrients: {
      nitrogen: { value: 35, status: "optimal" },
      phosphorus: { value: 25, status: "low" },
      potassium: { value: 40, status: "optimal" },
    },
  }

  // Function to determine status color
  const getStatusColor = (value, optimal) => {
    if (value < optimal.min) return "text-amber-500"
    if (value > optimal.max) return "text-red-500"
    return "text-green-500"
  }

  // Function to render progress bar
  const renderProgressBar = (value, optimal, max = 100) => {
    const percentage = (value / max) * 100

    return (
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full ${
            value < optimal.min ? "bg-amber-500" : value > optimal.max ? "bg-red-500" : "bg-green-500"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Surveillance du sol</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="field-soil-select">Parcelle:</Label>
            <Select defaultValue="field-a">
              <SelectTrigger id="field-soil-select" className="w-[180px]">
                <SelectValue placeholder="Sélectionner une parcelle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="field-a">Parcelle A</SelectItem>
                <SelectItem value="field-b">Parcelle B</SelectItem>
                <SelectItem value="field-c">Parcelle C</SelectItem>
                <SelectItem value="field-d">Parcelle D</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="moisture">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="moisture">Humidité</TabsTrigger>
              <TabsTrigger value="temperature">Température</TabsTrigger>
              <TabsTrigger value="nutrients">Nutriments</TabsTrigger>
            </TabsList>

            <TabsContent value="moisture" className="space-y-4 pt-4">
              <div className="flex items-center">
                <Droplets className="h-10 w-10 text-blue-500 mr-4" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Humidité actuelle</span>
                    <span
                      className={`font-medium ${getStatusColor(soilData.moisture.current, soilData.moisture.optimal)}`}
                    >
                      {soilData.moisture.current}%
                    </span>
                  </div>
                  {renderProgressBar(soilData.moisture.current, soilData.moisture.optimal)}
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Sec</span>
                    <span>
                      Optimal: {soilData.moisture.optimal.min}%-{soilData.moisture.optimal.max}%
                    </span>
                    <span>Humide</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Tendance sur 7 jours</h4>
                <div className="flex items-end h-[100px] gap-1">
                  {soilData.moisture.history.map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className={`w-full rounded-t-sm ${
                          value < soilData.moisture.optimal.min
                            ? "bg-amber-500"
                            : value > soilData.moisture.optimal.max
                              ? "bg-red-500"
                              : "bg-green-500"
                        }`}
                        style={{ height: `${value}%` }}
                      ></div>
                      <span className="text-xs mt-1">{index + 1}j</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-sm">
                <p>L'humidité du sol est dans la plage optimale. Aucune action n'est requise pour le moment.</p>
              </div>
            </TabsContent>

            <TabsContent value="temperature" className="space-y-4 pt-4">
              <div className="flex items-center">
                <Thermometer className="h-10 w-10 text-red-500 mr-4" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Température actuelle</span>
                    <span
                      className={`font-medium ${getStatusColor(soilData.temperature.current, soilData.temperature.optimal)}`}
                    >
                      {soilData.temperature.current}°C
                    </span>
                  </div>
                  {renderProgressBar(soilData.temperature.current, soilData.temperature.optimal, 40)}
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Froid</span>
                    <span>
                      Optimal: {soilData.temperature.optimal.min}°C-{soilData.temperature.optimal.max}°C
                    </span>
                    <span>Chaud</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Tendance sur 7 jours</h4>
                <div className="flex items-end h-[100px] gap-1">
                  {soilData.temperature.history.map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className={`w-full rounded-t-sm ${
                          value < soilData.temperature.optimal.min
                            ? "bg-amber-500"
                            : value > soilData.temperature.optimal.max
                              ? "bg-red-500"
                              : "bg-green-500"
                        }`}
                        style={{ height: `${(value / 40) * 100}%` }}
                      ></div>
                      <span className="text-xs mt-1">{index + 1}j</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nutrients" className="space-y-4 pt-4">
              <div className="flex items-center">
                <Flask className="h-10 w-10 text-green-500 mr-4" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium mb-2">Niveau des nutriments</h4>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Azote (N)</span>
                        <span
                          className={`text-sm font-medium ${
                            soilData.nutrients.nitrogen.status === "low"
                              ? "text-amber-500"
                              : soilData.nutrients.nitrogen.status === "high"
                                ? "text-red-500"
                                : "text-green-500"
                          }`}
                        >
                          {soilData.nutrients.nitrogen.value} ppm
                        </span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            soilData.nutrients.nitrogen.status === "low"
                              ? "bg-amber-500"
                              : soilData.nutrients.nitrogen.status === "high"
                                ? "bg-red-500"
                                : "bg-green-500"
                          }`}
                          style={{ width: `${soilData.nutrients.nitrogen.value}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Phosphore (P)</span>
                        <span
                          className={`text-sm font-medium ${
                            soilData.nutrients.phosphorus.status === "low"
                              ? "text-amber-500"
                              : soilData.nutrients.phosphorus.status === "high"
                                ? "text-red-500"
                                : "text-green-500"
                          }`}
                        >
                          {soilData.nutrients.phosphorus.value} ppm
                        </span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            soilData.nutrients.phosphorus.status === "low"
                              ? "bg-amber-500"
                              : soilData.nutrients.phosphorus.status === "high"
                                ? "bg-red-500"
                                : "bg-green-500"
                          }`}
                          style={{ width: `${soilData.nutrients.phosphorus.value}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Potassium (K)</span>
                        <span
                          className={`text-sm font-medium ${
                            soilData.nutrients.potassium.status === "low"
                              ? "text-amber-500"
                              : soilData.nutrients.potassium.status === "high"
                                ? "text-red-500"
                                : "text-green-500"
                          }`}
                        >
                          {soilData.nutrients.potassium.value} ppm
                        </span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            soilData.nutrients.potassium.status === "low"
                              ? "bg-amber-500"
                              : soilData.nutrients.potassium.status === "high"
                                ? "bg-red-500"
                                : "bg-green-500"
                          }`}
                          style={{ width: `${soilData.nutrients.potassium.value}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-sm">
                <p className="text-amber-500 font-medium">Recommandation:</p>
                <p>
                  Le niveau de phosphore est bas. Envisagez d'appliquer un engrais riche en phosphore lors de votre
                  prochaine fertilisation.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}

