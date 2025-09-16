"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, TrendingDown, TrendingUp } from "lucide-react"
import { useTranslation } from "./language-provider"

export function CostAnalytics() {
  const { t } = useTranslation()

  // Sample cost breakdown data
  const costBreakdown = [
    { category: "Semences", value: 15, color: "bg-blue-500" },
    { category: "Engrais", value: 25, color: "bg-green-500" },
    { category: "Produits phytosanitaires", value: 12, color: "bg-yellow-500" },
    { category: "Carburant", value: 18, color: "bg-red-500" },
    { category: "Main-d'œuvre", value: 20, color: "bg-purple-500" },
    { category: "Autres", value: 10, color: "bg-gray-500" },
  ]

  // Sample profitability data
  const profitabilityData = [
    { crop: "Maïs", revenue: 2500, cost: 1800, profit: 700, margin: 28 },
    { crop: "Blé", revenue: 2200, cost: 1600, profit: 600, margin: 27 },
    { crop: "Soja", revenue: 2800, cost: 1900, profit: 900, margin: 32 },
    { crop: "Tomates", revenue: 5500, cost: 4200, profit: 1300, margin: 24 },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Analyse des coûts</CardTitle>
        <Button variant="outline" size="sm" className="ml-auto">
          <Download className="h-4 w-4 mr-2" />
          Exporter
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="breakdown">
          <TabsList className="mb-4">
            <TabsTrigger value="breakdown">Répartition</TabsTrigger>
            <TabsTrigger value="profitability">Rentabilité</TabsTrigger>
            <TabsTrigger value="trends">Tendances</TabsTrigger>
          </TabsList>

          <TabsContent value="breakdown" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-cost-select">Culture</Label>
                <Select defaultValue="corn">
                  <SelectTrigger id="crop-cost-select">
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
                <Label htmlFor="year-cost-select">Année</Label>
                <Select defaultValue="2023">
                  <SelectTrigger id="year-cost-select">
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
              <div className="text-sm font-medium mb-2">Répartition des coûts</div>
              <div className="flex flex-col space-y-2">
                {costBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.category}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Coût total par hectare</div>
                  <div className="text-2xl font-bold">1 800 €/ha</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Variation par rapport à 2022</div>
                  <div className="text-2xl font-bold text-amber-500">+5.2%</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Opportunités d'optimisation</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>Engrais: Optimisation possible de 10% en adoptant une fertilisation de précision</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>Carburant: Réduction possible de 8% en optimisant les trajets et la consommation</span>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="profitability" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="year-profitability-select">Année</Label>
              <Select defaultValue="2023">
                <SelectTrigger id="year-profitability-select">
                  <SelectValue placeholder="Sélectionner une année" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <div className="text-sm font-medium mb-2">Rentabilité par culture</div>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 text-left">Culture</th>
                      <th className="p-2 text-right">Revenu (€/ha)</th>
                      <th className="p-2 text-right">Coût (€/ha)</th>
                      <th className="p-2 text-right">Profit (€/ha)</th>
                      <th className="p-2 text-right">Marge (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profitabilityData.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2 font-medium">{item.crop}</td>
                        <td className="p-2 text-right">{item.revenue}</td>
                        <td className="p-2 text-right">{item.cost}</td>
                        <td className="p-2 text-right">{item.profit}</td>
                        <td className="p-2 text-right">
                          <div className="flex items-center justify-end gap-1">
                            {item.margin > 30 ? (
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            ) : item.margin < 25 ? (
                              <TrendingDown className="h-4 w-4 text-red-500" />
                            ) : null}
                            <span
                              className={item.margin > 30 ? "text-green-500" : item.margin < 25 ? "text-red-500" : ""}
                            >
                              {item.margin}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Analyse de rentabilité</h4>
              <p className="text-sm">
                Le soja présente la meilleure marge bénéficiaire à 32%, tandis que les tomates, malgré un revenu élevé,
                ont une marge plus faible en raison des coûts de production importants. Envisagez d'augmenter la surface
                de soja pour la prochaine saison.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cost-category-select">Catégorie de coût</Label>
              <Select defaultValue="all">
                <SelectTrigger id="cost-category-select">
                  <SelectValue placeholder="Sélectionner une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les coûts</SelectItem>
                  <SelectItem value="seeds">Semences</SelectItem>
                  <SelectItem value="fertilizers">Engrais</SelectItem>
                  <SelectItem value="pesticides">Produits phytosanitaires</SelectItem>
                  <SelectItem value="fuel">Carburant</SelectItem>
                  <SelectItem value="labor">Main-d'œuvre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <div className="text-sm font-medium mb-2">Évolution des coûts sur 5 ans</div>
              <div className="h-[200px] flex items-end gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-[120px] w-12 bg-primary rounded-t-sm"></div>
                  <span className="text-xs mt-1">2019</span>
                  <span className="text-xs font-medium">1500€</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-[140px] w-12 bg-primary rounded-t-sm"></div>
                  <span className="text-xs mt-1">2020</span>
                  <span className="text-xs font-medium">1600€</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-[150px] w-12 bg-primary rounded-t-sm"></div>
                  <span className="text-xs mt-1">2021</span>
                  <span className="text-xs font-medium">1650€</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-[160px] w-12 bg-primary rounded-t-sm"></div>
                  <span className="text-xs mt-1">2022</span>
                  <span className="text-xs font-medium">1710€</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-[180px] w-12 bg-primary rounded-t-sm"></div>
                  <span className="text-xs mt-1">2023</span>
                  <span className="text-xs font-medium">1800€</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Analyse des tendances</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>Augmentation constante des coûts de 4-5% par an</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>Hausse plus marquée des engrais (+12% en 2023)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>Stabilité relative des coûts de main-d'œuvre</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

