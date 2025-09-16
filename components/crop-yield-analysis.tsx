"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useTranslation } from "./language-provider"

export function CropYieldAnalysis() {
  const { t } = useTranslation()

  // Sample data for yield visualization
  const yieldData = [
    { year: 2020, yield: 7.2 },
    { year: 2021, yield: 6.8 },
    { year: 2022, yield: 8.1 },
    { year: 2023, yield: 7.9 },
  ]

  // Calculate max yield for scaling the bars
  const maxYield = Math.max(...yieldData.map((d) => d.yield))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analyse des rendements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="crop-yield-select">Culture</Label>
              <Select defaultValue="corn">
                <SelectTrigger id="crop-yield-select">
                  <SelectValue placeholder="Sélectionner une culture" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corn">Maïs</SelectItem>
                  <SelectItem value="wheat">Blé</SelectItem>
                  <SelectItem value="soybean">Soja</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="field-yield-select">Parcelle</Label>
              <Select defaultValue="all">
                <SelectTrigger id="field-yield-select">
                  <SelectValue placeholder="Sélectionner une parcelle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les parcelles</SelectItem>
                  <SelectItem value="field-a">Parcelle A</SelectItem>
                  <SelectItem value="field-b">Parcelle B</SelectItem>
                  <SelectItem value="field-c">Parcelle C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="pt-4">
            <div className="text-sm font-medium mb-2">Rendement (tonnes/ha)</div>
            <div className="space-y-3">
              {yieldData.map((data) => (
                <div key={data.year} className="flex items-center gap-2">
                  <div className="w-12 text-sm">{data.year}</div>
                  <div className="flex-1 h-8 bg-muted rounded-sm overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${(data.yield / maxYield) * 100}%` }}></div>
                  </div>
                  <div className="w-12 text-sm font-medium">{data.yield.toFixed(1)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Rendement moyen</div>
                <div className="text-2xl font-bold">
                  {(yieldData.reduce((sum, d) => sum + d.yield, 0) / yieldData.length).toFixed(1)} t/ha
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Tendance</div>
                <div className="text-2xl font-bold text-green-500">+5.2%</div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t mt-4">
            <h4 className="font-medium mb-2">Facteurs d'influence</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                <span>
                  Précipitations: <span className="font-medium">+12% en 2022</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                <span>
                  Fertilisation: <span className="font-medium">Optimisée en 2022-2023</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                <span>
                  Variété: <span className="font-medium">Changement en 2022</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

