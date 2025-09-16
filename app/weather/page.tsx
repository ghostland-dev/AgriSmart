import { WeatherDashboard } from "@/components/weather-dashboard"
import { SoilMonitoring } from "@/components/soil-monitoring"
import { WeatherAlerts } from "@/components/weather-alerts"

export default function WeatherPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Surveillance météorologique</h1>
      <WeatherDashboard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SoilMonitoring />
        <WeatherAlerts />
      </div>
    </div>
  )
}

