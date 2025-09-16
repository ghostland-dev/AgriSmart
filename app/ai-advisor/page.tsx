import { CropRecommendations } from "@/components/crop-recommendations"
import { WeatherPredictions } from "@/components/weather-predictions"
import { PestDetection } from "@/components/pest-detection"
import { YieldOptimizer } from "@/components/yield-optimizer"

export default function AIAdvisorPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Conseiller IA</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <CropRecommendations />
        <WeatherPredictions />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PestDetection />
        <YieldOptimizer />
      </div>
    </div>
  )
}

