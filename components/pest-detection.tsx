"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Camera, Bug, AlertTriangle, Leaf, FileText, Zap } from "lucide-react"
import { useTranslation } from "./language-provider"

export function PestDetection() {
  const { t } = useTranslation()
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasResult, setHasResult] = useState(false)

  // Function to handle image upload and analysis
  const handleAnalyzeImage = () => {
    setIsAnalyzing(true)
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
      setHasResult(true)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Détection de parasites et maladies</CardTitle>
        <CardDescription>Identifiez les parasites et maladies des plantes à l'aide de l'IA</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upload">
          <TabsList className="mb-4">
            <TabsTrigger value="upload">Analyser une image</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
            <TabsTrigger value="library">Bibliothèque</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <div className="space-y-4">
              {!hasResult ? (
                <>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                    <div className="mb-4 bg-muted rounded-full p-3">
                      <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-sm font-medium mb-1">Téléchargez une image</h3>
                    <p className="text-xs text-muted-foreground text-center mb-4">
                      Téléchargez une photo claire de la plante affectée pour l'analyse
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Parcourir
                      </Button>
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Prendre une photo
                      </Button>
                    </div>
                    <Input type="file" className="hidden" accept="image/*" id="pest-image-upload" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image-description">Description (optionnelle)</Label>
                    <Input id="image-description" placeholder="Ex: Taches jaunes sur les feuilles de tomate" />
                  </div>

                  <Button className="w-full" onClick={handleAnalyzeImage} disabled={isAnalyzing}>
                    <Zap className="h-4 w-4 mr-2" />
                    {isAnalyzing ? "Analyse en cours..." : "Analyser l'image"}
                  </Button>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Résultats de l'analyse</h3>
                    <Button variant="ghost" size="sm" onClick={() => setHasResult(false)}>
                      Nouvelle analyse
                    </Button>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/3 border rounded-md overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="Plant image"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-2/3 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-500">Détecté</Badge>
                        <h4 className="font-medium">Mildiou de la tomate</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Maladie fongique causée par Phytophthora infestans, affectant les feuilles, tiges et fruits.
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Confiance: 92%</Badge>
                        <Badge variant="outline" className="bg-amber-100 text-amber-800">
                          Sévérité: Moyenne
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-md p-3 bg-amber-50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <h3 className="font-medium text-amber-800">Action recommandée</h3>
                    </div>
                    <ul className="space-y-1">
                      <li className="text-sm text-amber-700 flex items-start">
                        <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1.5 mr-1.5"></div>
                        <span>Appliquer un fongicide à base de cuivre dès que possible</span>
                      </li>
                      <li className="text-sm text-amber-700 flex items-start">
                        <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1.5 mr-1.5"></div>
                        <span>Retirer et détruire les parties de plantes infectées</span>
                      </li>
                      <li className="text-sm text-amber-700 flex items-start">
                        <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1.5 mr-1.5"></div>
                        <span>Améliorer la circulation d'air entre les plants</span>
                      </li>
                      <li className="text-sm text-amber-700 flex items-start">
                        <div className="rounded-full w-1.5 h-1.5 bg-amber-500 mt-1.5 mr-1.5"></div>
                        <span>Éviter d'arroser le feuillage, privilégier l'arrosage au sol</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Rapport détaillé
                    </Button>
                    <Button size="sm">
                      <Leaf className="h-4 w-4 mr-2" />
                      Traitement biologique
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-3">
              <div className="border rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bug className="h-4 w-4 text-red-500" />
                    <h4 className="font-medium">Mildiou de la tomate</h4>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    15/06/2023
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Plant thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Détecté sur: Tomates (Serre 1)</p>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        Confiance: 92%
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-amber-100 text-amber-800">
                        Sévérité: Moyenne
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bug className="h-4 w-4 text-amber-500" />
                    <h4 className="font-medium">Pucerons</h4>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    10/06/2023
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Plant thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Détecté sur: Laitue (Parcelle C)</p>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        Confiance: 88%
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-green-100 text-green-800">
                        Sévérité: Faible
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bug className="h-4 w-4 text-red-500" />
                    <h4 className="font-medium">Rouille du blé</h4>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    05/06/2023
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Plant thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Détecté sur: Blé (Parcelle A)</p>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        Confiance: 95%
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-red-100 text-red-800">
                        Sévérité: Élevée
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full text-sm">
                Voir tout l'historique
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="library">
            <div className="space-y-4">
              <div className="relative">
                <Input placeholder="Rechercher un parasite ou une maladie..." className="pl-8" />
                <Bug className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-1">Mildiou</h4>
                  <p className="text-xs text-muted-foreground mb-2">Maladie fongique affectant diverses cultures</p>
                  <Badge variant="outline" className="text-xs">
                    Tomates
                  </Badge>
                  <Badge variant="outline" className="text-xs ml-1">
                    Pommes de terre
                  </Badge>
                </div>

                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-1">Pucerons</h4>
                  <p className="text-xs text-muted-foreground mb-2">Insectes suceurs de sève</p>
                  <Badge variant="outline" className="text-xs">
                    Légumes
                  </Badge>
                  <Badge variant="outline" className="text-xs ml-1">
                    Fruits
                  </Badge>
                </div>

                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-1">Rouille</h4>
                  <p className="text-xs text-muted-foreground mb-2">Maladie fongique des céréales</p>
                  <Badge variant="outline" className="text-xs">
                    Blé
                  </Badge>
                  <Badge variant="outline" className="text-xs ml-1">
                    Orge
                  </Badge>
                </div>

                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-1">Oïdium</h4>
                  <p className="text-xs text-muted-foreground mb-2">Champignon formant un feutrage blanc</p>
                  <Badge variant="outline" className="text-xs">
                    Vigne
                  </Badge>
                  <Badge variant="outline" className="text-xs ml-1">
                    Cucurbitacées
                  </Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full text-sm">
                Voir la bibliothèque complète
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

