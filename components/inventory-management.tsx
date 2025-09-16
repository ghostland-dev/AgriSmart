"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, FileSpreadsheet, AlertTriangle } from "lucide-react"
import { useTranslation } from "./language-provider"

export function InventoryManagement() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  // Sample inventory data
  const inventory = {
    seeds: [
      {
        id: 1,
        name: "Maïs",
        variety: "Sweet Corn F1",
        quantity: 25,
        unit: "kg",
        supplier: "AgriSeed",
        expiryDate: "2024-05-15",
        status: "ok",
      },
      {
        id: 2,
        name: "Blé",
        variety: "Winter Wheat",
        quantity: 50,
        unit: "kg",
        supplier: "FarmSeeds",
        expiryDate: "2024-06-20",
        status: "ok",
      },
      {
        id: 3,
        name: "Tomates",
        variety: "Roma",
        quantity: 0.5,
        unit: "kg",
        supplier: "GreenGrow",
        expiryDate: "2023-12-10",
        status: "low",
      },
    ],
    fertilizers: [
      {
        id: 1,
        name: "NPK 15-15-15",
        type: "Granulé",
        quantity: 500,
        unit: "kg",
        supplier: "AgroNutrients",
        expiryDate: "2025-03-10",
        status: "ok",
      },
      {
        id: 2,
        name: "Urée",
        type: "Granulé",
        quantity: 200,
        unit: "kg",
        supplier: "FertiPlus",
        expiryDate: "2024-08-15",
        status: "ok",
      },
      {
        id: 3,
        name: "Phosphate",
        type: "Liquide",
        quantity: 50,
        unit: "L",
        supplier: "AgroNutrients",
        expiryDate: "2023-11-30",
        status: "low",
      },
    ],
    pesticides: [
      {
        id: 1,
        name: "Insecticide Bio",
        type: "Liquide",
        quantity: 20,
        unit: "L",
        supplier: "EcoPest",
        expiryDate: "2024-04-25",
        status: "ok",
      },
      {
        id: 2,
        name: "Fongicide",
        type: "Poudre",
        quantity: 5,
        unit: "kg",
        supplier: "PlantProtect",
        expiryDate: "2023-12-05",
        status: "low",
      },
      {
        id: 3,
        name: "Herbicide",
        type: "Liquide",
        quantity: 15,
        unit: "L",
        supplier: "WeedControl",
        expiryDate: "2024-02-18",
        status: "ok",
      },
    ],
  }

  // Function to get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "ok":
        return <Badge className="bg-green-500">OK</Badge>
      case "low":
        return (
          <Badge variant="secondary" className="bg-amber-500">
            Faible
          </Badge>
        )
      case "expired":
        return <Badge variant="destructive">Expiré</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Inventaire</CardTitle>
        <div className="ml-auto flex space-x-2">
          <Button variant="outline" size="sm">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter un produit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Ajouter un nouveau produit</DialogTitle>
                <DialogDescription>Entrez les détails du produit à ajouter à l'inventaire.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product-type">Type de produit</Label>
                    <Select>
                      <SelectTrigger id="product-type">
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seed">Semence</SelectItem>
                        <SelectItem value="fertilizer">Engrais</SelectItem>
                        <SelectItem value="pesticide">Produit phytosanitaire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-name">Nom du produit</Label>
                    <Input id="product-name" placeholder="Ex: Maïs" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product-variety">Variété/Type</Label>
                    <Input id="product-variety" placeholder="Ex: Sweet Corn F1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplier">Fournisseur</Label>
                    <Input id="supplier" placeholder="Ex: AgriSeed" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantité</Label>
                    <Input id="quantity" type="number" placeholder="Ex: 25" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unité</Label>
                    <Select>
                      <SelectTrigger id="unit">
                        <SelectValue placeholder="Unité" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="g">g</SelectItem>
                        <SelectItem value="L">L</SelectItem>
                        <SelectItem value="mL">mL</SelectItem>
                        <SelectItem value="units">unités</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry-date">Date d'expiration</Label>
                    <Input id="expiry-date" type="date" />
                  </div>
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
        <Tabs defaultValue="seeds">
          <TabsList className="mb-4">
            <TabsTrigger value="seeds">Semences</TabsTrigger>
            <TabsTrigger value="fertilizers">Engrais</TabsTrigger>
            <TabsTrigger value="pesticides">Produits phytosanitaires</TabsTrigger>
          </TabsList>

          <TabsContent value="seeds">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Variété</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Fournisseur</TableHead>
                    <TableHead>Date d'expiration</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventory.seeds.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.variety}</TableCell>
                      <TableCell>
                        {item.quantity} {item.unit}
                      </TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>{item.expiryDate}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
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

            <div className="mt-4 flex items-center gap-2 text-amber-500">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Stock faible: Tomates (Roma)</span>
            </div>
          </TabsContent>

          <TabsContent value="fertilizers">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Fournisseur</TableHead>
                    <TableHead>Date d'expiration</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventory.fertilizers.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>
                        {item.quantity} {item.unit}
                      </TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>{item.expiryDate}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
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

            <div className="mt-4 flex items-center gap-2 text-amber-500">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Stock faible: Phosphate (Liquide)</span>
            </div>
          </TabsContent>

          <TabsContent value="pesticides">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Fournisseur</TableHead>
                    <TableHead>Date d'expiration</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventory.pesticides.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>
                        {item.quantity} {item.unit}
                      </TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>{item.expiryDate}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
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

            <div className="mt-4 flex items-center gap-2 text-amber-500">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Stock faible: Fongicide (Poudre)</span>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

