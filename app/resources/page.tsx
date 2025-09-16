import { InventoryManagement } from "@/components/inventory-management"
import { EquipmentManagement } from "@/components/equipment-management"
import { WorkforceManagement } from "@/components/workforce-management"

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Gestion des ressources</h1>
      <InventoryManagement />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EquipmentManagement />
        <WorkforceManagement />
      </div>
    </div>
  )
}

