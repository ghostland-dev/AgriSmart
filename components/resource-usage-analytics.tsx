"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Droplets, FlaskRoundIcon as Flask } from "lucide-react"
import { useTranslation } from "./language-provider"

export function ResourceUsageAnalytics() {
  const { t } = useTranslation()

  // Sample resource usage data
  const resourceUsage = [
    {
      resource: "Eau d'irrigation",
      usage: 2500,
      unit: "m³/ha",
      benchmark: 2800,
      efficiency: "high",
    },
    {
      resource: "Engrais azotés",
      usage: 180,
      unit: "kg/ha",
      benchmark: 200,
      efficiency: "medium",
    },
    {
      resource: "Carburant",
      usage: 95,
      unit: "L/ha",
      benchmark: 90,
      efficiency: "low",
    },
    {
      resource: "Produits phytosanitaires",
      usage: 3.5,
      unit: "kg/ha",
      benchmark: 4.0,
      efficiency: "high",
    },
  ]

  // Function to get efficiency badge color
  const getEfficiencyColor = (efficiency) => {
    switch (efficiency) {
      case "high":
        return "text-green-500"
      case "medium":
        return "text-amber-500"
      case "low":
        return "text-red-500"
      default:
        return ""
    }
  }

  // Sample monthly irrigation data
  const irrigationData = [
    { month: "Avr", value: 150 },
    { month: "Mai", value: 300 },
    { month: "Juin", value: 450 },
    { month: "Juil", value: 800 },
    { month: "Août", value: 650 },
    { month: "Sep", value: 150 },
  ]

  // Calculate max irrigation for scaling the bars
  const maxIrrigation = Math.max(...irrigationData.map((d) => d.value))

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Utilisation des ressources</CardTitle>
        <Button variant="outline" size="sm" className="ml-auto">
          <Download className="h-4 w-4 mr-2" />
          Exporter
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="irrigation">Irrigation</TabsTrigger>
            <TabsTrigger value="fertilizers">Fertilisation</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-resource-select">Culture</Label>
                <Select defaultValue="corn">
                  <SelectTrigger id="crop-resource-select">
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
                <Label htmlFor="year-resource-select">Année</Label>
                <Select defaultValue="2023">
                  <SelectTrigger id="year-resource-select">
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
              <div className="text-sm font-medium mb-2">Utilisation des ressources vs référence régionale</div>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 text-left">Ressource</th>
                      <th className="p-2 text-right">Utilisation</th>
                      <th className="p-2 text-right">Référence</th>
                      <th className="p-2 text-right">Différence</th>
                      <th className="p-2 text-right">Efficacité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resourceUsage.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2 font-medium">{item.resource}</td>
                        <td className="p-2 text-right">
                          {item.usage} {item.unit}
                        </td>
                        <td className="p-2 text-right">
                          {item.benchmark} {item.unit}
                        </td>
                        <td className="p-2 text-right">
                          {(((item.usage - item.benchmark) / item.benchmark) * 100).toFixed(1)}%
                        </td>
                        <td className={`p-2 text-right ${getEfficiencyColor(item.efficiency)}`}>
                          {item.efficiency === "high" ? "Élevée" : item.efficiency === "medium" ? "Moyenne" : "Faible"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Recommandations d'optimisation</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>
                    Carburant: Optimisez les trajets et réduisez le travail du sol pour diminuer la consommation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full w-2 h-2 bg-primary mt-1.5"></div>
                  <span>
                    Engrais azotés: Envisagez l'utilisation de capteurs d'azote pour une application plus précise
                  </span>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="irrigation" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-irrigation-select">Culture</Label>
                <Select defaultValue="corn">
                  <SelectTrigger id="crop-irrigation-select">
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
                <Label htmlFor="field-irrigation-select">Parcelle</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="field-irrigation-select">
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
              <div className="flex items-center gap-4 mb-4">
                <Droplets className="h-10 w-10 text-blue-500" />
                <div>
                  <div className="text-sm text-muted-foreground">Irrigation totale</div>
                  <div className="text-2xl font-bold">2 500 m³/ha</div>
                </div>
              </div>

              <div className="text-sm font-medium mb-2">Répartition mensuelle (m³/ha)</div>
              <div className="h-[150px] flex items-end gap-4">
                {irrigationData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-blue-500 rounded-t-sm"
                      style={{ height: `${(item.value / maxIrrigation) * 100}%` }}
                    ></div>
                    <span className="text-xs mt-1">{item.month}</span>
                    <span className="text-xs font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t mt-4">
              <h4 className="font-medium mb-2">Efficacité de l'irrigation</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Efficacité d'utilisation de l'eau</div>
                  <div className="text-2xl font-bold">3.2 kg/m³</div>
                  <div className="text-xs text-muted-foreground">(kg de grain par m³ d'eau)</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Économie d'eau vs référence</div>
                  <div className="text-2xl font-bold text-green-500">-10.7%</div>
                  <div className="text-xs text-muted-foreground">(300 m³/ha économisés)</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fertilizers" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop-fertilizer-select">Culture</Label>
                <Select defaultValue="corn">
                  <SelectTrigger id="crop-fertilizer-select">
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
                <Label htmlFor="year-fertilizer-select">Année</Label>
                <Select defaultValue="2023">
                  <SelectTrigger id="year-fertilizer-select">
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

            <div className="pt-4 flex items-center gap-4 mb-4">
              <Flask className="h-10 w-10 text-green-500" />
              <div>
                <div className="text-sm text-muted-foreground">Fertilisation totale</div>
                <div className="text-2xl font-bold">180 kg N/ha</div>
              </div>
            </div>

            <div className="pt-4 text-center">
              <div className="text-sm font-medium mb-2">
                Analyse détaillée de la fertilisation en cours de développement...
              </div>
              <p className="text-sm text-muted-foreground my-8">
                Cette fonctionnalité sera disponible dans la prochaine mise à jour.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

