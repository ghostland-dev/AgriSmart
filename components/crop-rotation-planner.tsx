"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "./language-provider"

export function CropRotationPlanner() {
  const { t } = useTranslation()

  // Sample data for crop rotation visualization
  const fields = [
    { id: "field-a", name: "Parcelle A" },
    { id: "field-b", name: "Parcelle B" },
    { id: "field-c", name: "Parcelle C" },
    { id: "field-d", name: "Parcelle D" },
  ]

  const years = ["2023", "2024", "2025", "2026"]

  const rotationData = {
    "field-a": {
      "2023": { crop: "Maïs", color: "bg-yellow-200" },
      "2024": { crop: "Soja", color: "bg-green-200" },
      "2025": { crop: "Blé", color: "bg-amber-200" },
      "2026": { crop: "Luzerne", color: "bg-purple-200" },
    },
    "field-b": {
      "2023": { crop: "Blé", color: "bg-amber-200" },
      "2024": { crop: "Luzerne", color: "bg-purple-200" },
      "2025": { crop: "Maïs", color: "bg-yellow-200" },
      "2026": { crop: "Soja", color: "bg-green-200" },
    },
    "field-c": {
      "2023": { crop: "Soja", color: "bg-green-200" },
      "2024": { crop: "Blé", color: "bg-amber-200" },
      "2025": { crop: "Luzerne", color: "bg-purple-200" },
      "2026": { crop: "Maïs", color: "bg-yellow-200" },
    },
    "field-d": {
      "2023": { crop: "Luzerne", color: "bg-purple-200" },
      "2024": { crop: "Maïs", color: "bg-yellow-200" },
      "2025": { crop: "Soja", color: "bg-green-200" },
      "2026": { crop: "Blé", color: "bg-amber-200" },
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Planification des rotations</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="visual">
          <TabsList className="mb-4">
            <TabsTrigger value="visual">Visuel</TabsTrigger>
            <TabsTrigger value="planner">Planificateur</TabsTrigger>
          </TabsList>

          <TabsContent value="visual">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 bg-muted">Parcelle</th>
                    {years.map((year) => (
                      <th key={year} className="border p-2 bg-muted">
                        {year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fields.map((field) => (
                    <tr key={field.id}>
                      <td className="border p-2 font-medium">{field.name}</td>
                      {years.map((year) => {
                        const data = rotationData[field.id]?.[year]
                        return (
                          <td key={year} className={`border p-2 ${data?.color || ""}`}>
                            {data?.crop || "-"}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-200"></div>
                <span className="text-sm">Maïs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-200"></div>
                <span className="text-sm">Soja</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-amber-200"></div>
                <span className="text-sm">Blé</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-200"></div>
                <span className="text-sm">Luzerne</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="planner">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="field-select">Parcelle</Label>
                  <Select>
                    <SelectTrigger id="field-select">
                      <SelectValue placeholder="Sélectionner une parcelle" />
                    </SelectTrigger>
                    <SelectContent>
                      {fields.map((field) => (
                        <SelectItem key={field.id} value={field.id}>
                          {field.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year-select">Année</Label>
                  <Select>
                    <SelectTrigger id="year-select">
                      <SelectValue placeholder="Sélectionner une année" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="crop-select">Culture</Label>
                <Select>
                  <SelectTrigger id="crop-select">
                    <SelectValue placeholder="Sélectionner une culture" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corn">Maïs</SelectItem>
                    <SelectItem value="soybean">Soja</SelectItem>
                    <SelectItem value="wheat">Blé</SelectItem>
                    <SelectItem value="alfalfa">Luzerne</SelectItem>
                    <SelectItem value="barley">Orge</SelectItem>
                    <SelectItem value="oats">Avoine</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-2">
                <Button>Mettre à jour la rotation</Button>
              </div>

              <div className="pt-4 border-t mt-4">
                <h4 className="font-medium mb-2">Recommandations de rotation</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                    <span>Alternez les cultures à racines profondes et peu profondes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                    <span>Alternez les légumineuses (soja, luzerne) avec les céréales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                    <span>Évitez de planter la même famille de cultures deux années consécutives</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

