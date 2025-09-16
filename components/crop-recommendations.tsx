"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sprout, Zap } from "lucide-react"
import { useTranslation } from "./language-provider"

export function CropRecommendations() {
  const { t } = useTranslation()
  const [field, setField] = useState("field-a")
  const [season, setSeason] = useState("spring")
  const [isLoading, setIsLoading] = useState(false)

  // Sample recommended crops data
  const recommendedCrops = [
    {
      name: "Maïs",
      score: 92,
      soilSuitability: "Élevée",
      waterRequirement: "Moyenne",
      profitPotential: "Élevé",
      growthDuration: "90-120 jours",
      icon: <Sprout className="h-5 w-5 text-green-500" />,
    },
    {
      name: "Soja",
      score: 87,
      soilSuitability: "Élevée",
      waterRequirement: "Faible",
      profitPotential: "Moyen",
      growthDuration: "100-140 jours",
      icon: <Sprout className="h-5 w-5 text-green-500" />,
    },
    {
      name: "Tournesol",
      score: 81,
      soilSuitability: "Moyenne",
      waterRequirement: "Faible",
      profitPotential: "Moyen",
      growthDuration: "70-100 jours",
      icon: <Sprout className="h-5 w-5 text-green-500" />,
    },
    {
      name: "Blé de printemps",
      score: 78,
      soilSuitability: "Moyenne",
      waterRequirement: "Faible",
      profitPotential: "Moyen",
      growthDuration: "100-130 jours",
      icon: <Sprout className="h-5 w-5 text-green-500" />,
    },
  ]

  // Sample soil data
  const soilData = {
    "field-a": {
      type: "Limoneux",
      ph: 6.8,
      organicMatter: "3.2%",
      nitrogen: "Moyen",
      phosphorus: "Élevé",
      potassium: "Moyen",
    },
    "field-b": {
      type: "Argilo-limoneux",
      ph: 7.2,
      organicMatter: "2.8%",
      nitrogen: "Faible",
      phosphorus: "Moyen",
      potassium: "Élevé",
    },
    "field-c": {
      type: "Sableux",
      ph: 6.5,
      organicMatter: "2.1%",
      nitrogen: "Faible",
      phosphorus: "Faible",
      potassium: "Moyen",
    },
  }

  // Function to handle recommendation generation
  const handleGenerateRecommendations = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommandations de cultures</CardTitle>
        <CardDescription>
          Obtenez des recommandations de cultures basées sur l'IA pour optimiser vos rendements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="recommendations">
          <TabsList className="mb-4">
            <TabsTrigger value="recommendations">Recommandations</TabsTrigger>
            <TabsTrigger value="parameters">Paramètres</TabsTrigger>
            <TabsTrigger value="soil">Analyse du sol</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="field-select">Parcelle</Label>
                  <Select value={field} onValueChange={setField}>
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
                <div className="space-y-2">
                  <Label htmlFor="season-select">Saison</Label>
                  <Select value={season} onValueChange={setSeason}>
                    <SelectTrigger id="season-select">
                      <SelectValue placeholder="Sélectionner une saison" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spring">Printemps</SelectItem>
                      <SelectItem value="summer">Été</SelectItem>
                      <SelectItem value="fall">Automne</SelectItem>
                      <SelectItem value="winter">Hiver</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full" onClick={handleGenerateRecommendations} disabled={isLoading}>
                <Zap className="h-4 w-4 mr-2" />
                {isLoading ? "Génération en cours..." : "Générer des recommandations"}
              </Button>

              <div className="space-y-3 mt-2">
                {recommendedCrops.map((crop, index) => (
                  <div key={index} className="border rounded-md p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {crop.icon}
                        <h3 className="font-medium">{crop.name}</h3>
                      </div>
                      <Badge className="bg-green-500">Score: {crop.score}%</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Adaptation au sol:</span>
                        <span>{crop.soilSuitability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Besoin en eau:</span>
                        <span>{crop.waterRequirement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Potentiel de profit:</span>
                        <span>{crop.profitPotential}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Durée de croissance:</span>
                        <span>{crop.growthDuration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="parameters">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="profit-importance">Importance du profit</Label>
                  <span className="text-sm">Élevée</span>
                </div>
                <Slider defaultValue={[80]} max={100} step={1} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="water-conservation">Conservation de l'eau</Label>
                  <span className="text-sm">Moyenne</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="labor-intensity">Intensité de main-d'œuvre</Label>
                  <span className="text-sm">Faible</span>
                </div>
                <Slider defaultValue={[30]} max={100} step={1} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="growth-duration">Durée de croissance</Label>
                  <span className="text-sm">Moyenne</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="crop-rotation">Rotation des cultures</Label>
                <Select defaultValue="consider">
                  <SelectTrigger id="crop-rotation">
                    <SelectValue placeholder="Sélectionner une option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consider">Prendre en compte</SelectItem>
                    <SelectItem value="ignore">Ignorer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="market-trends">Tendances du marché</Label>
                <Select defaultValue="consider">
                  <SelectTrigger id="market-trends">
                    <SelectValue placeholder="Sélectionner une option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consider">Prendre en compte</SelectItem>
                    <SelectItem value="ignore">Ignorer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">Appliquer les paramètres</Button>
            </div>
          </TabsContent>

          <TabsContent value="soil">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="soil-field-select">Parcelle</Label>
                <Select value={field} onValueChange={setField}>
                  <SelectTrigger id="soil-field-select">
                    <SelectValue placeholder="Sélectionner une parcelle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="field-a">Parcelle A</SelectItem>
                    <SelectItem value="field-b">Parcelle B</SelectItem>
                    <SelectItem value="field-c">Parcelle C</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">
                  Analyse du sol -{" "}
                  {field === "field-a" ? "Parcelle A" : field === "field-b" ? "Parcelle B" : "Parcelle C"}
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type de sol:</span>
                    <span>{soilData[field as keyof typeof soilData]?.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">pH:</span>
                    <span>{soilData[field as keyof typeof soilData]?.ph}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Matière organique:</span>
                    <span>{soilData[field as keyof typeof soilData]?.organicMatter}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Azote:</span>
                    <span>{soilData[field as keyof typeof soilData]?.nitrogen}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phosphore:</span>
                    <span>{soilData[field as keyof typeof soilData]?.phosphorus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Potassium:</span>
                    <span>{soilData[field as keyof typeof soilData]?.potassium}</span>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <h3 className="font-medium mb-2">Cultures adaptées à ce type de sol</h3>
                <div className="flex flex-wrap gap-2">
                  {field === "field-a" ? (
                    <>
                      <Badge variant="outline">Maïs</Badge>
                      <Badge variant="outline">Blé</Badge>
                      <Badge variant="outline">Soja</Badge>
                      <Badge variant="outline">Tournesol</Badge>
                      <Badge variant="outline">Colza</Badge>
                    </>
                  ) : field === "field-b" ? (
                    <>
                      <Badge variant="outline">Blé</Badge>
                      <Badge variant="outline">Orge</Badge>
                      <Badge variant="outline">Luzerne</Badge>
                      <Badge variant="outline">Betterave</Badge>
                    </>
                  ) : (
                    <>
                      <Badge variant="outline">Seigle</Badge>
                      <Badge variant="outline">Pomme de terre</Badge>
                      <Badge variant="outline">Carottes</Badge>
                      <Badge variant="outline">Asperges</Badge>
                    </>
                  )}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Mettre à jour l'analyse du sol
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

