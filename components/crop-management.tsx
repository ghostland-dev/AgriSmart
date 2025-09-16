"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, FileSpreadsheet } from "lucide-react"
import { useTranslation } from "./language-provider"

export function CropManagement() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const crops = [
    {
      id: 1,
      name: "Corn",
      variety: "Sweet Corn",
      field: "Field A",
      area: "5 ha",
      plantingDate: "2023-04-15",
      harvestDate: "2023-09-01",
      status: "growing",
    },
    {
      id: 2,
      name: "Wheat",
      variety: "Winter Wheat",
      field: "Field B",
      area: "8 ha",
      plantingDate: "2023-03-10",
      harvestDate: "2023-07-20",
      status: "growing",
    },
    {
      id: 3,
      name: "Tomatoes",
      variety: "Roma",
      field: "Greenhouse 1",
      area: "0.5 ha",
      plantingDate: "2023-05-01",
      harvestDate: "2023-08-15",
      status: "growing",
    },
    {
      id: 4,
      name: "Lettuce",
      variety: "Iceberg",
      field: "Field C",
      area: "1 ha",
      plantingDate: "2023-05-15",
      harvestDate: "2023-06-30",
      status: "ready",
    },
    {
      id: 5,
      name: "Soybeans",
      variety: "Glycine max",
      field: "Field D",
      area: "6 ha",
      plantingDate: "2023-05-20",
      harvestDate: "2023-10-15",
      status: "planned",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "planned":
        return <Badge variant="outline">Planifié</Badge>
      case "growing":
        return <Badge variant="secondary">En croissance</Badge>
      case "ready":
        return <Badge className="bg-green-500">Prêt à récolter</Badge>
      case "harvested":
        return <Badge variant="default">Récolté</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Cultures</CardTitle>
        <div className="ml-auto flex space-x-2">
          <Button variant="outline" size="sm">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter une culture
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Ajouter une nouvelle culture</DialogTitle>
                <DialogDescription>Entrez les détails de la nouvelle culture à planter.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="crop-name">Nom de la culture</Label>
                    <Input id="crop-name" placeholder="Ex: Maïs" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="crop-variety">Variété</Label>
                    <Input id="crop-variety" placeholder="Ex: Maïs doux" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="field">Parcelle</Label>
                    <Select>
                      <SelectTrigger id="field">
                        <SelectValue placeholder="Sélectionner une parcelle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="field-a">Parcelle A</SelectItem>
                        <SelectItem value="field-b">Parcelle B</SelectItem>
                        <SelectItem value="field-c">Parcelle C</SelectItem>
                        <SelectItem value="greenhouse-1">Serre 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Surface (ha)</Label>
                    <Input id="area" type="number" placeholder="Ex: 5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="planting-date">Date de plantation</Label>
                    <Input id="planting-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="harvest-date">Date de récolte prévue</Label>
                    <Input id="harvest-date" type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Statut</Label>
                  <Select>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Sélectionner un statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planned">Planifié</SelectItem>
                      <SelectItem value="growing">En croissance</SelectItem>
                      <SelectItem value="ready">Prêt à récolter</SelectItem>
                      <SelectItem value="harvested">Récolté</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Annuler
                </Button>
                <Button onClick={() => setOpen(false)}>Enregistrer</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active">
          <TabsList className="mb-4">
            <TabsTrigger value="active">Actives</TabsTrigger>
            <TabsTrigger value="planned">Planifiées</TabsTrigger>
            <TabsTrigger value="harvested">Récoltées</TabsTrigger>
            <TabsTrigger value="all">Toutes</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Culture</TableHead>
                    <TableHead>Variété</TableHead>
                    <TableHead>Parcelle</TableHead>
                    <TableHead>Surface</TableHead>
                    <TableHead>Date de plantation</TableHead>
                    <TableHead>Date de récolte</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {crops
                    .filter((crop) => crop.status === "growing" || crop.status === "ready")
                    .map((crop) => (
                      <TableRow key={crop.id}>
                        <TableCell className="font-medium">{crop.name}</TableCell>
                        <TableCell>{crop.variety}</TableCell>
                        <TableCell>{crop.field}</TableCell>
                        <TableCell>{crop.area}</TableCell>
                        <TableCell>{crop.plantingDate}</TableCell>
                        <TableCell>{crop.harvestDate}</TableCell>
                        <TableCell>{getStatusBadge(crop.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Modifier</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Supprimer</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="planned">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Culture</TableHead>
                    <TableHead>Variété</TableHead>
                    <TableHead>Parcelle</TableHead>
                    <TableHead>Surface</TableHead>
                    <TableHead>Date de plantation</TableHead>
                    <TableHead>Date de récolte</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {crops
                    .filter((crop) => crop.status === "planned")
                    .map((crop) => (
                      <TableRow key={crop.id}>
                        <TableCell className="font-medium">{crop.name}</TableCell>
                        <TableCell>{crop.variety}</TableCell>
                        <TableCell>{crop.field}</TableCell>
                        <TableCell>{crop.area}</TableCell>
                        <TableCell>{crop.plantingDate}</TableCell>
                        <TableCell>{crop.harvestDate}</TableCell>
                        <TableCell>{getStatusBadge(crop.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Modifier</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Supprimer</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="harvested">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Culture</TableHead>
                    <TableHead>Variété</TableHead>
                    <TableHead>Parcelle</TableHead>
                    <TableHead>Surface</TableHead>
                    <TableHead>Date de plantation</TableHead>
                    <TableHead>Date de récolte</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {crops
                    .filter((crop) => crop.status === "harvested")
                    .map((crop) => (
                      <TableRow key={crop.id}>
                        <TableCell className="font-medium">{crop.name}</TableCell>
                        <TableCell>{crop.variety}</TableCell>
                        <TableCell>{crop.field}</TableCell>
                        <TableCell>{crop.area}</TableCell>
                        <TableCell>{crop.plantingDate}</TableCell>
                        <TableCell>{crop.harvestDate}</TableCell>
                        <TableCell>{getStatusBadge(crop.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Modifier</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Supprimer</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="all">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Culture</TableHead>
                    <TableHead>Variété</TableHead>
                    <TableHead>Parcelle</TableHead>
                    <TableHead>Surface</TableHead>
                    <TableHead>Date de plantation</TableHead>
                    <TableHead>Date de récolte</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {crops.map((crop) => (
                    <TableRow key={crop.id}>
                      <TableCell className="font-medium">{crop.name}</TableCell>
                      <TableCell>{crop.variety}</TableCell>
                      <TableCell>{crop.field}</TableCell>
                      <TableCell>{crop.area}</TableCell>
                      <TableCell>{crop.plantingDate}</TableCell>
                      <TableCell>{crop.harvestDate}</TableCell>
                      <TableCell>{getStatusBadge(crop.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Modifier</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Supprimer</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

