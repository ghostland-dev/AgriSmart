"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, QrCode, FileText, Calendar, Truck, Factory, Warehouse, ShoppingBag } from "lucide-react"
import { useTranslation } from "./language-provider"

export function ProductTraceability() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")

  // Sample products data
  const products = [
    {
      id: "BLE-2023-001",
      name: "Blé tendre",
      variety: "Apache",
      field: "Parcelle A",
      plantingDate: "15/10/2022",
      harvestDate: "15/07/2023",
      quantity: "35 tonnes",
      status: "harvested",
      certifications: ["bio", "hve"],
      destination: "Coopérative Agricole du Centre",
      batchNumber: "BAT-2023-001",
    },
    {
      id: "MAIS-2023-001",
      name: "Maïs",
      variety: "Sweet Corn F1",
      field: "Parcelle B",
      plantingDate: "10/04/2023",
      harvestDate: "20/09/2023",
      quantity: "28 tonnes",
      status: "harvested",
      certifications: ["hve"],
      destination: "Marché local",
      batchNumber: "BAT-2023-002",
    },
    {
      id: "SOJA-2023-001",
      name: "Soja",
      variety: "Glycine max",
      field: "Parcelle D",
      plantingDate: "01/05/2023",
      harvestDate: "10/10/2023",
      quantity: "18 tonnes",
      status: "harvested",
      certifications: ["bio", "hve"],
      destination: "Coopérative Bio-Verte",
      batchNumber: "BAT-2023-003",
    },
    {
      id: "TOM-2023-001",
      name: "Tomates",
      variety: "Roma",
      field: "Serre 1",
      plantingDate: "15/03/2023",
      harvestDate: "Multiple",
      quantity: "5 tonnes",
      status: "in_progress",
      certifications: ["bio"],
      destination: "Marché local",
      batchNumber: "BAT-2023-004",
    },
    {
      id: "LAIT-2023-001",
      name: "Laitue",
      variety: "Iceberg",
      field: "Parcelle C",
      plantingDate: "01/04/2023",
      harvestDate: "01/06/2023",
      quantity: "2 tonnes",
      status: "sold",
      certifications: ["bio", "hve"],
      destination: "Supermarché Régional",
      batchNumber: "BAT-2023-005",
    },
  ]

  // Function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "harvested":
        return <Badge className="bg-green-500">Récolté</Badge>
      case "in_progress":
        return <Badge variant="secondary">En cours</Badge>
      case "sold":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            Vendu
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Function to get certification badges
  const getCertificationBadges = (certifications: string[]) => {
    return (
      <div className="flex flex-wrap gap-1">
        {certifications.map((cert) => (
          <Badge
            key={cert}
            variant="outline"
            className={cert === "bio" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
          >
            {cert === "bio" ? "BIO" : cert === "hve" ? "HVE" : cert}
          </Badge>
        ))}
      </div>
    )
  }

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.variety.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.batchNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Sample traceability timeline for a selected product
  const traceabilityTimeline = [
    {
      date: "15/10/2022",
      event: "Semis",
      details: "Semis de blé tendre variété Apache sur la Parcelle A",
      icon: <Calendar className="h-5 w-5 text-primary" />,
    },
    {
      date: "20/10/2022",
      event: "Traitement",
      details: "Application d'engrais de fond NPK 15-15-15",
      icon: <Factory className="h-5 w-5 text-primary" />,
    },
    {
      date: "15/03/2023",
      event: "Traitement",
      details: "Application d'azote en couverture",
      icon: <Factory className="h-5 w-5 text-primary" />,
    },
    {
      date: "15/07/2023",
      event: "Récolte",
      details: "Récolte de 35 tonnes de blé tendre",
      icon: <Warehouse className="h-5 w-5 text-primary" />,
    },
    {
      date: "20/07/2023",
      event: "Transport",
      details: "Transport vers la Coopérative Agricole du Centre",
      icon: <Truck className="h-5 w-5 text-primary" />,
    },
    {
      date: "25/07/2023",
      event: "Stockage",
      details: "Stockage dans le silo 3 de la coopérative",
      icon: <Warehouse className="h-5 w-5 text-primary" />,
    },
    {
      date: "10/08/2023",
      event: "Vente",
      details: "Vente à la Minoterie Régionale pour transformation",
      icon: <ShoppingBag className="h-5 w-5 text-primary" />,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Traçabilité des produits agricoles</CardTitle>
        <CardDescription>Suivez le parcours de vos produits de la plantation à la vente</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="products">
          <TabsList className="mb-4">
            <TabsTrigger value="products">Produits</TabsTrigger>
            <TabsTrigger value="timeline">Chronologie</TabsTrigger>
            <TabsTrigger value="certificates">Certificats</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher par ID, nom, variété..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <QrCode className="h-4 w-4 mr-2" />
                Scanner QR
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Produit</TableHead>
                    <TableHead>Parcelle</TableHead>
                    <TableHead>Récolte</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Certifications</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell>
                        <div>
                          <div>{product.name}</div>
                          <div className="text-xs text-muted-foreground">{product.variety}</div>
                        </div>
                      </TableCell>
                      <TableCell>{product.field}</TableCell>
                      <TableCell>{product.harvestDate}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{getCertificationBadges(product.certifications)}</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Détails
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Rechercher un produit par ID..." className="pl-8" />
              </div>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                Afficher
              </Button>
            </div>

            <div className="p-4 border rounded-md mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-medium">Blé tendre - Apache</h3>
                  <p className="text-sm text-muted-foreground">ID: BLE-2023-001</p>
                </div>
                <div className="flex items-center">{getCertificationBadges(["bio", "hve"])}</div>
              </div>

              <div className="relative">
                {traceabilityTimeline.map((event, index) => (
                  <div key={index} className="mb-6 flex gap-4">
                    <div className="relative flex h-6 w-6 flex-none items-center justify-center">
                      <div className="absolute h-full w-px bg-muted" />
                      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-background border">
                        {event.icon}
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{event.event}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm">
                  Exporter l'historique
                </Button>
                <Button size="sm">Générer QR Code</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Certification Agriculture Biologique</h3>
                  <Badge className="bg-green-500">Actif</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Certification AB délivrée par Ecocert</p>
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Numéro:</span>
                    <span>BIO-2023-12345</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Date d'émission:</span>
                    <span>01/01/2023</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Date d'expiration:</span>
                    <span>31/12/2023</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    Voir le certificat
                  </Button>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Haute Valeur Environnementale (HVE)</h3>
                  <Badge className="bg-green-500">Actif</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Certification HVE niveau 3</p>
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Numéro:</span>
                    <span>HVE-2023-6789</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Date d'émission:</span>
                    <span>15/02/2023</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Date d'expiration:</span>
                    <span>14/02/2026</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    Voir le certificat
                  </Button>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Global G.A.P.</h3>
                  <Badge variant="outline">En attente</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Certification en cours d'obtention</p>
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Numéro:</span>
                    <span>En attente</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Date de demande:</span>
                    <span>10/06/2023</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Statut:</span>
                    <span>Audit prévu le 15/11/2023</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    Voir la demande
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

