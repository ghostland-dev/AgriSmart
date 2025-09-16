"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, Droplets, Thermometer, Wind } from "lucide-react"
import { useTranslation } from "./language-provider"

export function WeatherWidget() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("weatherForecast")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="today">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">{t("today")}</TabsTrigger>
            <TabsTrigger value="week">{t("thisWeek")}</TabsTrigger>
            <TabsTrigger value="month">{t("thisMonth")}</TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cloud className="h-10 w-10 text-blue-500" />
                <div>
                  <h3 className="text-2xl font-bold">24°C</h3>
                  <p className="text-muted-foreground">Partly Cloudy</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm">High: 26°C</p>
                <p className="text-sm">Low: 18°C</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium">{t("temperature")}</p>
                  <p className="text-sm">24°C</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">{t("humidity")}</p>
                  <p className="text-sm">65%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">{t("precipitation")}</p>
                  <p className="text-sm">20%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-cyan-500" />
                <div>
                  <p className="text-sm font-medium">{t("wind")}</p>
                  <p className="text-sm">12 km/h</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium">{t("soilMoisture")}</p>
              <div className="h-2 w-full bg-muted mt-1 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[45%]" />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Dry</span>
                <span>45%</span>
                <span>Wet</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="week">
            <div className="text-center py-8">
              <p>{t("weeklyForecast")}</p>
            </div>
          </TabsContent>
          <TabsContent value="month">
            <div className="text-center py-8">
              <p>{t("monthlyForecast")}</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

