import { CropManagement } from "@/components/crop-management"
import { CropRotationPlanner } from "@/components/crop-rotation-planner"
import { CropYieldAnalysis } from "@/components/crop-yield-analysis"

export default function CropsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Gestion des cultures</h1>
      <CropManagement />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CropRotationPlanner />
        <CropYieldAnalysis />
      </div>
    </div>
  )
}

