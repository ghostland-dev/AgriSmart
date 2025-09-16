"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Phone, Mail, Star, Edit, Trash2, FileText, ShoppingCart } from "lucide-react"
import { useTranslation } from "./language-provider"

export function SuppliersList() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")

  // Sample suppliers data
  const suppliers = [
    {
      id: 1,
      name: "AgriSeed",
      type: "seeds",
      contact: "Jean Dupont",
      phone: "+33 1 23 45 67 89",
      email: "contact@agriseed.com",
      address: "123 Rue des Semences, 75001 Paris",
      rating: 5,
      status: "active",
    },
    {
      id: 2,
      name: "FertiPlus",
      type: "fertilizers",
      contact: "Marie Martin",
      phone: "+33 1 23 45 67 90",
      email: "info@fertiplus.com",
      address: "456 Avenue des Engrais, 69002 Lyon",
      rating: 4,
      status: "active",
    },
    {
      id: 3,
      name: "AgroNutrients",
      type: "fertilizers",
      contact: "Pierre Dubois",
      phone: "+33 1 23 45 67 91",
      email: "contact@agronutrients.com",
      address: "789 Boulevard des Nutriments, 33000 Bordeaux",
      rating: 3,
      status: "active",
    },
    {
      id: 4,
      name: "EcoPest",
      type: "pesticides",
      contact: "Sophie Leroy",
      phone: "+33 1 23 45 67 92",
      email: "info@ecopest.com",
      address: "101 Rue de la Protection, 31000 Toulouse",
      rating: 5,
      status: "active",
    },
    {
      id: 5,
      name: "FarmSeeds",
      type: "seeds",
      contact: "Thomas Bernard",
      phone: "+33 1 23 45 67 93",
      email: "contact@farmseeds.com",
      address: "202 Avenue des Graines, 59000 Lille",
      rating: 4,
      status: "inactive",
    },
    {
      id: 6,
      name: "GreenGrow",
      type: "seeds",
      contact: "Julie Petit",
      phone: "+33 1 23 45 67 94",
      email: "info@greengrow.com",
      address: "303 Boulevard Vert, 44000 Nantes",
      rating: 4,
      status: "active",
    },
    {
      id: 7,
      name: "PlantProtect",
      type: "pesticides",
      contact: "Michel Roux",
      phone: "+33 1 23 45 67 95",
      email: "contact@plantprotect.com",
      address: "404 Rue de la Santé Végétale, 67000 Strasbourg",
      rating: 3,
      status: "active",
    },
    {
      id: 8,
      name: "WeedControl",
      type: "pesticides",
      contact: "Isabelle Moreau",
      phone: "+33 1 23 45 67 96",
      email: "info@weedcontrol.com",
      address: "505 Avenue du Désherbage, 13000 Marseille",
      rating: 4,
      status: "inactive",
    },
  ]

  // Function to get badge for supplier type
  const getSupplierTypeBadge = (type: string) => {
    switch (type) {
      case "seeds":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Semences
          </Badge>
        )
      case "fertilizers":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Engrais
          </Badge>
        )
      case "pesticides":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Produits phyto
          </Badge>
        )
      case "equipment":
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
            Équipement
          </Badge>
        )
      default:
        return <Badge variant="outline">Autre</Badge>
    }
  }

  // Function to render rating stars
  const renderRating = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  // Filter suppliers based on search term
  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Liste des fournisseurs</CardTitle>
        <div className="ml-auto flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-[200px] pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un fournisseur
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="seeds">Semences</TabsTrigger>
            <TabsTrigger value="fertilizers">Engrais</TabsTrigger>
            <TabsTrigger value="pesticides">Produits phyto</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Évaluation</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell>{getSupplierTypeBadge(supplier.type)}</TableCell>
                      <TableCell>{supplier.contact}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{supplier.phone}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{supplier.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>{renderRating(supplier.rating)}</TableCell>
                      <TableCell>
                        <Badge variant={supplier.status === "active" ? "default" : "secondary"}>
                          {supplier.status === "active" ? "Actif" : "Inactif"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <ShoppingCart className="h-4 w-4" />
                            <span className="sr-only">Commander</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Détails</span>
                          </Button>
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

          <TabsContent value="seeds">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Évaluation</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuppliers
                    .filter((supplier) => supplier.type === "seeds")
                    .map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">{supplier.name}</TableCell>
                        <TableCell>{getSupplierTypeBadge(supplier.type)}</TableCell>
                        <TableCell>{supplier.contact}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{supplier.phone}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{supplier.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>{renderRating(supplier.rating)}</TableCell>
                        <TableCell>
                          <Badge variant={supplier.status === "active" ? "default" : "secondary"}>
                            {supplier.status === "active" ? "Actif" : "Inactif"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <ShoppingCart className="h-4 w-4" />
                              <span className="sr-only">Commander</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">Détails</span>
                            </Button>
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

          <TabsContent value="fertilizers">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Évaluation</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuppliers
                    .filter((supplier) => supplier.type === "fertilizers")
                    .map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">{supplier.name}</TableCell>
                        <TableCell>{getSupplierTypeBadge(supplier.type)}</TableCell>
                        <TableCell>{supplier.contact}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{supplier.phone}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{supplier.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>{renderRating(supplier.rating)}</TableCell>
                        <TableCell>
                          <Badge variant={supplier.status === "active" ? "default" : "secondary"}>
                            {supplier.status === "active" ? "Actif" : "Inactif"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <ShoppingCart className="h-4 w-4" />
                              <span className="sr-only">Commander</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">Détails</span>
                            </Button>
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

          <TabsContent value="pesticides">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Évaluation</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuppliers
                    .filter((supplier) => supplier.type === "pesticides")
                    .map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">{supplier.name}</TableCell>
                        <TableCell>{getSupplierTypeBadge(supplier.type)}</TableCell>
                        <TableCell>{supplier.contact}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{supplier.phone}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{supplier.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>{renderRating(supplier.rating)}</TableCell>
                        <TableCell>
                          <Badge variant={supplier.status === "active" ? "default" : "secondary"}>
                            {supplier.status === "active" ? "Actif" : "Inactif"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <ShoppingCart className="h-4 w-4" />
                              <span className="sr-only">Commander</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">Détails</span>
                            </Button>
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

