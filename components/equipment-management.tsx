"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tractor, PenToolIcon as Tool, Wrench, Calendar, Plus } from "lucide-react"
import { useTranslation } from "./language-provider"
import { useState } from "react"

export function EquipmentManagement() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  // Sample equipment data
  const equipment = [
    {
      id: 1,
      name: "Tracteur John Deere",
      type: "Tracteur",
      status: "operational",
      lastMaintenance: "2023-05-15",
      nextMaintenance: "2023-11-15",
      hoursUsed: 1250,
    },
    {
      id: 2,
      name: "Semoir Amazone",
      type: "Semoir",
      status: "maintenance",
      lastMaintenance: "2023-02-10",
      nextMaintenance: "2023-08-10",
      hoursUsed: 450,
    },
    {
      id: 3,
      name: "Pulvérisateur Berthoud",
      type: "Pulvérisateur",
      status: "operational",
      lastMaintenance: "2023-04-20",
      nextMaintenance: "2023-10-20",
      hoursUsed: 320,
    },
    {
      id: 4,
      name: "Moissonneuse Claas",
      type: "Moissonneuse",
      status: "operational",
      lastMaintenance: "2023-06-05",
      nextMaintenance: "2023-12-05",
      hoursUsed: 800,
    },
  ]

  // Function to get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500">Opérationnel</Badge>
      case "maintenance":
        return (
          <Badge variant="secondary" className="bg-amber-500">
            En maintenance
          </Badge>
        )
      case "repair":
        return <Badge variant="destructive">En réparation</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Function to get equipment icon
  const getEquipmentIcon = (type) => {
    switch (type.toLowerCase()) {
      case "tracteur":
        return <Tractor className="h-4 w-4" />
      default:
        return <Tool className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Équipement</CardTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="ml-auto">
              <Plus className="h-4 w-4 mr-2" />
              Ajouter
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Ajouter un nouvel équipement</DialogTitle>
              <DialogDescription>Entrez les détails de l'équipement à ajouter.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="equipment-name">Nom de l'équipement</Label>
                  <Input id="equipment-name" placeholder="Ex: Tracteur John Deere" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="equipment-type">Type</Label>
                  <Select>
                    <SelectTrigger id="equipment-type">
                      <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tractor">Tracteur</SelectItem>
                      <SelectItem value="seeder">Semoir</SelectItem>
                      <SelectItem value="sprayer">Pulvérisateur</SelectItem>
                      <SelectItem value="harvester">Moissonneuse</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="last-maintenance">Dernière maintenance</Label>
                  <Input id="last-maintenance" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours-used">Heures d'utilisation</Label>
                  <Input id="hours-used" type="number" placeholder="Ex: 500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipment-status">Statut</Label>
                <Select>
                  <SelectTrigger id="equipment-status">
                    <SelectValue placeholder="Sélectionner un statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="operational">Opérationnel</SelectItem>
                    <SelectItem value="maintenance">En maintenance</SelectItem>
                    <SelectItem value="repair">En réparation</SelectItem>
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
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Équipement</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Dernière maintenance</TableHead>
                <TableHead>Prochaine maintenance</TableHead>
                <TableHead>Heures</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipment.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {getEquipmentIcon(item.type)}
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>{item.lastMaintenance}</TableCell>
                  <TableCell>{item.nextMaintenance}</TableCell>
                  <TableCell>{item.hoursUsed} h</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Wrench className="h-4 w-4" />
                        <span className="sr-only">Maintenance</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Calendar className="h-4 w-4" />
                        <span className="sr-only">Planifier</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Maintenance à venir</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 border rounded-md">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-amber-500" />
                <span>Semoir Amazone</span>
              </div>
              <Badge variant="outline">10 août 2023</Badge>
            </div>
            <div className="flex items-center justify-between p-2 border rounded-md">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-amber-500" />
                <span>Pulvérisateur Berthoud</span>
              </div>
              <Badge variant="outline">20 octobre 2023</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

