"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sprout, TrendingUp, Zap, BarChart, LineChart, PieChart } from "lucide-react"
import { useTranslation } from "./language-provider"

export function YieldOptimizer() {
  const { t } = useTranslation()
  const [isOptimizing, setIsOptimizing] = useState(false)

  // Sample optimization parameters
  const optimizationParams = {
    seedingRate: 75,
    fertilizationRate: 60,
    irrigationRate: 50,
    rowSpacing: 65,
  }

  // Function to handle optimization
  const handleOptimize = () => {
    setIsOptimizing(true)
    // Simulate API call
    setTimeout(() => {
      setIsOptimizing(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Optimiseur de rendement</CardTitle>
        <CardDescription>Optimisez vos pratiques agricoles pour maximiser les rendements</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="parameters">
          <TabsList className="mb-4">
            <TabsTrigger value="parameters">Paramètres</TabsTrigger>
            <TabsTrigger value="results">Résultats</TabsTrigger>
            <TabsTrigger value="comparison">Comparaison</TabsTrigger>
          </TabsList>

          <TabsContent value="parameters">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="crop-select">Culture</Label>
                  <Select defaultValue="corn">
                    <SelectTrigger id="crop-select">
                      <SelectValue placeholder="Sélectionner une culture" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corn">Maïs</SelectItem>
                      <SelectItem value="wheat">Blé</SelectItem>
                      <SelectItem value="soybean">Soja</SelectItem>
                      <SelectItem value="sunflower">Tournesol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="field-select">Parcelle</Label>
                  <Select defaultValue="field-a">
                    <SelectTrigger id="field-select">
                      <SelectValue placeholder="Sélectionner une parcelle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="field-a">Parcelle A</SelectItem>
                      <SelectItem value="field-b">Parcelle B</SelectItem>
                      <SelectItem value="field-c">Parcelle C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="seeding-rate">Densité de semis</Label>
                    <span className="text-sm">{optimizationParams.seedingRate}%</span>
                  </div>
                  <Slider id="seeding-rate" defaultValue={[optimizationParams.seedingRate]} max={100} step={1} />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Faible</span>
                    <span>Recommandé</span>
                    <span>Élevée</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="fertilization-rate">Taux de fertilisation</Label>
                    <span className="text-sm">{optimizationParams.fertilizationRate}%</span>
                  </div>
                  <Slider
                    id="fertilization-rate"
                    defaultValue={[optimizationParams.fertilizationRate]}
                    max={100}
                    step={1}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Faible</span>
                    <span>Recommandé</span>
                    <span>Élevée</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="irrigation-rate">Taux d'irrigation</Label>
                    <span className="text-sm">{optimizationParams.irrigationRate}%</span>
                  </div>
                  <Slider id="irrigation-rate" defaultValue={[optimizationParams.irrigationRate]} max={100} step={1} />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Faible</span>
                    <span>Recommandé</span>
                    <span>Élevée</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="row-spacing">Espacement des rangs</Label>
                    <span className="text-sm">{optimizationParams.rowSpacing}%</span>
                  </div>
                  <Slider id="row-spacing" defaultValue={[optimizationParams.rowSpacing]} max={100} step={1} />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Serré</span>
                    <span>Recommandé</span>
                    <span>Large</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={handleOptimize} disabled={isOptimizing}>
                <Zap className="h-4 w-4 mr-2" />
                {isOptimizing ? "Optimisation en cours..." : "Optimiser le rendement"}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="results">
            <div className="space-y-4">
              <div className="border rounded-md p-4 bg-green-50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-green-800 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Augmentation de rendement estimée
                  </h3>
                  <span className="text-xl font-bold text-green-600">+18%</span>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  Basé sur les paramètres optimisés et les conditions actuelles
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-green-700 font-medium">Rendement actuel</div>
                    <div className="text-xl font-bold">7.2 t/ha</div>
                  </div>
                  <div>
                    <div className="text-green-700 font-medium">Rendement optimisé</div>
                    <div className="text-xl font-bold">8.5 t/ha</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">Recommandations détaillées</h3>

                <div className="border rounded-md p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Sprout className="h-5 w-5 text-green-500" />
                    <h4 className="font-medium">Densité de semis</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Augmenter la densité de semis à 85,000 plants/ha (+10%)
                  </p>
                  <div className="text-xs text-muted-foreground">Impact estimé: +7% sur le rendement</div>
                </div>

                <div className="border rounded-md p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Sprout className="h-5 w-5 text-green-500" />
                    <h4 className="font-medium">Fertilisation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Appliquer 180 kg/ha d'azote en fractionnant en 3 apports
                  </p>
                  <div className="text-xs text-muted-foreground">Impact estimé: +5% sur le rendement</div>
                </div>

                <div className="border rounded-md p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Sprout className="h-5 w-5 text-green-500" />
                    <h4 className="font-medium">Irrigation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Maintenir l'humidité du sol entre 60-70% pendant la floraison
                  </p>
                  <div className="text-xs text-muted-foreground">Impact estimé: +4% sur le rendement</div>
                </div>

                <div className="border rounded-md p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Sprout className="h-5 w-5 text-green-500" />
                    <h4 className="font-medium">Espacement des rangs</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Réduire l'espacement des rangs à 70 cm</p>
                  <div className="text-xs text-muted-foreground">Impact estimé: +2% sur le rendement</div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Générer un plan d'action détaillé
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Comparaison des scénarios</h3>
                <Select defaultValue="yield">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Critère de comparaison" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yield">Rendement</SelectItem>
                    <SelectItem value="profit">Rentabilité</SelectItem>
                    <SelectItem value="sustainability">Durabilité</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Comparaison des rendements</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Pratiques actuelles</span>
                      <span>7.2 t/ha</span>
                    </div>
                    <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground" style={{ width: "72%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Optimisation standard</span>
                      <span>8.5 t/ha</span>
                    </div>
                    <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Optimisation intensive</span>
                      <span>9.2 t/ha</span>
                    </div>
                    <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "92%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Moyenne régionale</span>
                      <span>6.8 t/ha</span>
                    </div>
                    <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-md p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <LineChart className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-medium">Coûts</h4>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Actuel:</span>
                      <span>1,200 €/ha</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Optimisé:</span>
                      <span>1,350 €/ha</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-muted-foreground">Différence:</span>
                      <span className="text-amber-600">+150 €/ha</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <PieChart className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-medium">Bénéfices</h4>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Actuel:</span>
                      <span>1,800 €/ha</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Optimisé:</span>
                      <span>2,550 €/ha</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-muted-foreground">Différence:</span>
                      <span className="text-green-600">+750 €/ha</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Analyse coût-bénéfice détaillée
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

