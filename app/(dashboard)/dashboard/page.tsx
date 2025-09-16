import { DashboardCards } from "@/components/dashboard-cards"
import { WeatherWidget } from "@/components/weather-widget"
import { TasksList } from "@/components/tasks-list"
import { CropCalendar } from "@/components/crop-calendar"
import { FarmMap } from "@/components/farm-map"
import { FinancialSummary } from "@/components/financial-summary"
import { ActivityFeed } from "@/components/activity-feed"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
      <DashboardCards />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <FarmMap />
        </div>
        <div className="space-y-6">
          <WeatherWidget />
          <FinancialSummary />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TasksList />
        <ActivityFeed />
      </div>

      <CropCalendar />
    </div>
  )
}

