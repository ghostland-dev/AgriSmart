"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Cloud, CloudRain, Droplets, Thermometer, Wind, Sun, CloudLightning } from "lucide-react"
import { useTranslation } from "./language-provider"

export function WeatherDashboard() {
  const { t } = useTranslation()
  const [selectedStation, setSelectedStation] = useState("station-1")

  // Sample weather stations
  const stations = [
    { id: "station-1", name: "Station principale" },
    { id: "station-2", name: "Parcelle Nord" },
    { id: "station-3", name: "Parcelle Sud" },
    { id: "station-4", name: "Serre" },
  ]

  // Sample weather forecast data
  const forecastData = [
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
    },
    {
      day: "Jeudi",
      date: "23 juin",
      icon: <CloudLightning className="h-8 w-8 text-purple-500" />,
      condition: "Orage",
      high: 20,
      low: 15,
      precipitation: 80,
      humidity: 85,
      wind: 25,
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
    },
    {
      day: "Samedi",
      date: "25 juin",
      icon: <Cloud className="h-8 w-8 text-gray-500" />,
      condition: "Nuageux",
      high: 23,
      low: 15,
      precipitation: 20,
      humidity: 65,
      wind: 12,
    },
    {
      day: "Dimanche",
      date: "26 juin",
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      condition: "Ensoleillé",
      high: 26,
      low: 16,
      precipitation: 0,
      humidity: 50,
      wind: 8,
    },
  ]

  // Sample hourly data for today
  const hourlyData = [
    { time: "06:00", temp: 18, icon: <Sun className="h-5 w-5 text-yellow-500" /> },
    { time: "09:00", temp: 22, icon: <Sun className="h-5 w-5 text-yellow-500" /> },
    { time: "12:00", temp: 26, icon: <Sun className="h-5 w-5 text-yellow-500" /> },
    { time: "15:00", temp: 28, icon: <Sun className="h-5 w-5 text-yellow-500" /> },
    { time: "18:00", temp: 25, icon: <Sun className="h-5 w-5 text-yellow-500" /> },
    { time: "21:00", temp: 20, icon: <Cloud className="h-5 w-5 text-gray-500" /> },
    { time: "00:00", temp: 18, icon: <Cloud className="h-5 w-5 text-gray-500" /> },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Prévisions météorologiques</CardTitle>
        <div className="ml-auto flex items-center space-x-2">
          <Label htmlFor="station-select" className="mr-2">
            Station:
          </Label>
          <Select value={selectedStation} onValueChange={setSelectedStation}>
            <SelectTrigger id="station-select" className="w-[180px]">
              <SelectValue placeholder="Sélectionner une station" />
            </SelectTrigger>
            <SelectContent>
              {stations.map((station) => (
                <SelectItem key={station.id} value={station.id}>
                  {station.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily">
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Quotidien</TabsTrigger>
            <TabsTrigger value="hourly">Horaire</TabsTrigger>
            <TabsTrigger value="historical">Historique</TabsTrigger>
          </TabsList>

          <TabsContent value="daily">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {forecastData.map((day, index) => (
                <Card key={index} className={index === 0 ? "bg-muted" : ""}>
                  <CardContent className="p-3">
                    <div className="text-center">
                      <div className="font-medium">{day.day}</div>
                      <div className="text-sm text-muted-foreground">{day.date}</div>
                      <div className="flex justify-center my-2">{day.icon}</div>
                      <div className="text-sm">{day.condition}</div>
                      <div className="flex justify-center gap-2 mt-2">
                        <span className="font-medium">{day.high}°</span>
                        <span className="text-muted-foreground">{day.low}°</span>
                      </div>
                      <div className="mt-2 text-sm flex items-center justify-center gap-1">
                        <CloudRain className="h-3 w-3" />
                        <span>{day.precipitation}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center p-4 border rounded-lg">
                <Thermometer className="h-8 w-8 text-red-500 mr-4" />
                <div>
                  <div className="text-sm text-muted-foreground">Température</div>
                  <div className="text-2xl font-bold">28°C</div>
                  <div className="text-sm text-muted-foreground">Ressenti: 30°C</div>
                </div>
              </div>

              <div className="flex items-center p-4 border rounded-lg">
                <Droplets className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <div className="text-sm text-muted-foreground">Humidité</div>
                  <div className="text-2xl font-bold">45%</div>
                  <div className="text-sm text-muted-foreground">Point de rosée: 15°C</div>
                </div>
              </div>

              <div className="flex items-center p-4 border rounded-lg">
                <Wind className="h-8 w-8 text-cyan-500 mr-4" />
                <div>
                  <div className="text-sm text-muted-foreground">Vent</div>
                  <div className="text-2xl font-bold">10 km/h</div>
                  <div className="text-sm text-muted-foreground">Direction: NE</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hourly">
            <div className="overflow-x-auto">
              <div className="inline-flex min-w-full">
                {hourlyData.map((hour, index) => (
                  <div key={index} className="text-center p-3 min-w-[100px]">
                    <div className="font-medium">{hour.time}</div>
                    <div className="flex justify-center my-2">{hour.icon}</div>
                    <div className="text-lg font-bold">{hour.temp}°</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Détails pour aujourd'hui</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Lever du soleil</span>
                    <span className="font-medium">05:42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Coucher du soleil</span>
                    <span className="font-medium">21:38</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Probabilité de précipitation</span>
                    <span className="font-medium">0%</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pression</span>
                    <span className="font-medium">1013 hPa</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Visibilité</span>
                    <span className="font-medium">10 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Indice UV</span>
                    <span className="font-medium">7 (Élevé)</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="historical">
            <div className="text-center py-8">
              <p>Données historiques disponibles pour les 30 derniers jours</p>
              <Button className="mt-4">Télécharger les données</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

