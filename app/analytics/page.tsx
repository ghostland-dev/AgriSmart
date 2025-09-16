import { YieldAnalytics } from "@/components/yield-analytics"
import { CostAnalytics } from "@/components/cost-analytics"
import { WeatherAnalytics } from "@/components/weather-analytics"
import { ResourceUsageAnalytics } from "@/components/resource-usage-analytics"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analyse et aide à la décision</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <YieldAnalytics />
        <CostAnalytics />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherAnalytics />
        <ResourceUsageAnalytics />
      </div>
    </div>
  )
}

