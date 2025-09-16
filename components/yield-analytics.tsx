"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useTranslation } from "./language-provider"

export function YieldAnalytics() {
  const { t } = useTranslation()

  // Sample yield data for visualization
  const yearlyYieldData = [
    { year: 2019, yield: 6.8 },
    { year: 2020, yield: 7.2 },
    { year: 2021, yield: 6.8 },
    { year: 2022, yield: 8.1 },
    { year: 2023, yield: 7.9 },
  ]

  // Calculate max yield for scaling the bars
  const maxYield = Math.max(...yearlyYieldData.map((d) => d.yield))

  // Sample comparison data
  const comparisonData = [
    { field: "Parcelle A", yield: 7.9, average: 7.2, difference: "+9.7%" },
    { field: "Parcelle B", yield: 8.2, average: 7.5, difference: "+9.3%" },
    { field: "Parcelle C", yield: 6.8, average: 7.0, difference: "-2.9%" },
    { field: "Parcelle D", yield: 7.5, average: 7.3, difference: "+2.7%" },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Analyse des rendements</CardTitle>
        <Button variant="outline" size="sm" className="ml-auto">
          <Download className="h-4 w-4 mr-2" />
          Exporter
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="yearly">
          <TabsList className="mb-4">
            <TabsTrigger value="yearly">Annuel</TabsTrigger>
            <TabsTrigger value="comparison">Comparaison</TabsTrigger>
            <TabsTrigger value="forecast">Prévisions</TabsTrigger>
          </TabsList>

          <TabsContent value="yearly" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-analytics-select">Culture</Label>
                <Select defaultValue="corn">
                  <SelectTrigger id="crop-analytics-select">
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
                <Label htmlFor="field-analytics-select">Parcelle</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="field-analytics-select">
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
                {yearlyYieldData.map((data) => (
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
                    {(yearlyYieldData.reduce((sum, d) => sum + d.yield, 0) / yearlyYieldData.length).toFixed(1)} t/ha
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Tendance sur 5 ans</div>
                  <div className="text-2xl font-bold text-green-500">+16.2%</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Facteurs d'influence</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>
                    Précipitations: <span className="font-medium">Corrélation positive (+0.75)</span>
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
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-comparison-select">Culture</Label>
                <Select defaultValue="corn">
                  <SelectTrigger id="crop-comparison-select">
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
                <Label htmlFor="year-comparison-select">Année</Label>
                <Select defaultValue="2023">
                  <SelectTrigger id="year-comparison-select">
                    <SelectValue placeholder="Sélectionner une année" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-sm font-medium mb-2">Comparaison avec la moyenne régionale</div>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 text-left">Parcelle</th>
                      <th className="p-2 text-right">Rendement</th>
                      <th className="p-2 text-right">Moyenne régionale</th>
                      <th className="p-2 text-right">Différence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2 font-medium">{item.field}</td>
                        <td className="p-2 text-right">{item.yield.toFixed(1)} t/ha</td>
                        <td className="p-2 text-right">{item.average.toFixed(1)} t/ha</td>
                        <td
                          className={`p-2 text-right ${
                            item.difference.startsWith("+") ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {item.difference}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Analyse comparative</h4>
              <p className="text-sm">
                Vos rendements sont généralement supérieurs à la moyenne régionale, à l'exception de la Parcelle C qui
                présente un rendement légèrement inférieur. Considérez une analyse du sol et des pratiques culturales
                sur cette parcelle.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="forecast" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-forecast-select">Culture</Label>
                <Select defaultValue="corn">
                  <SelectTrigger id="crop-forecast-select">
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
                <Label htmlFor="year-forecast-select">Année</Label>
                <Select defaultValue="2024">
                  <SelectTrigger id="year-forecast-select">
                    <SelectValue placeholder="Sélectionner une année" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-sm font-medium mb-2">Prévision de rendement pour 2024</div>
              <div className="p-4 border rounded-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm">Rendement prévu:</span>
                  <span className="text-2xl font-bold">8.2 t/ha</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scénario pessimiste</span>
                      <span>7.5 t/ha</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scénario moyen</span>
                      <span>8.2 t/ha</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scénario optimiste</span>
                      <span>8.8 t/ha</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Recommandations</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>Augmentez la densité de semis de 5% pour maximiser le potentiel de rendement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>Optimisez l'irrigation en fonction des prévisions météorologiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>Envisagez un fractionnement supplémentaire de la fertilisation azotée</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

