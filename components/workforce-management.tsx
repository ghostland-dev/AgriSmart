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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, UserPlus, Calendar, Clock } from "lucide-react"
import { useTranslation } from "./language-provider"
import { useState } from "react"

export function WorkforceManagement() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  // Sample workforce data
  const workers = [
    {
      id: 1,
      name: "Ahmed Benali",
      role: "Responsable de culture",
      status: "active",
      hours: 40,
      tasks: ["Supervision", "Planification"],
    },
    {
      id: 2,
      name: "Marie Dubois",
      role: "Technicien agricole",
      status: "active",
      hours: 35,
      tasks: ["Maintenance", "Récolte"],
    },
    {
      id: 3,
      name: "Karim Alaoui",
      role: "Ouvrier agricole",
      status: "active",
      hours: 40,
      tasks: ["Plantation", "Récolte"],
    },
    {
      id: 4,
      name: "Sophie Martin",
      role: "Ouvrier agricole",
      status: "leave",
      hours: 0,
      tasks: ["Récolte"],
    },
  ]

  // Sample schedule data
  const schedule = [
    { day: "Lundi", morning: ["Ahmed", "Karim", "Sophie"], afternoon: ["Ahmed", "Marie", "Karim"] },
    { day: "Mardi", morning: ["Ahmed", "Marie", "Karim"], afternoon: ["Ahmed", "Marie", "Karim"] },
    { day: "Mercredi", morning: ["Ahmed", "Marie", "Sophie"], afternoon: ["Ahmed", "Marie", "Sophie"] },
    { day: "Jeudi", morning: ["Ahmed", "Karim", "Sophie"], afternoon: ["Ahmed", "Marie", "Karim"] },
    { day: "Vendredi", morning: ["Ahmed", "Marie", "Karim"], afternoon: ["Ahmed", "Marie", "Sophie"] },
    { day: "Samedi", morning: ["Marie", "Karim"], afternoon: [] },
    { day: "Dimanche", morning: [], afternoon: [] },
  ]

  // Function to get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Actif</Badge>
      case "leave":
        return <Badge variant="secondary">En congé</Badge>
      case "sick":
        return <Badge variant="destructive">Malade</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Main-d'œuvre</CardTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="ml-auto">
              <UserPlus className="h-4 w-4 mr-2" />
              Ajouter
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Ajouter un nouveau travailleur</DialogTitle>
              <DialogDescription>Entrez les informations du travailleur à ajouter.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="worker-name">Nom complet</Label>
                  <Input id="worker-name" placeholder="Ex: Ahmed Benali" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="worker-role">Rôle</Label>
                  <Select>
                    <SelectTrigger id="worker-role">
                      <SelectValue placeholder="Sélectionner un rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manager">Responsable de culture</SelectItem>
                      <SelectItem value="technician">Technicien agricole</SelectItem>
                      <SelectItem value="worker">Ouvrier agricole</SelectItem>
                      <SelectItem value="seasonal">Travailleur saisonnier</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="worker-hours">Heures hebdomadaires</Label>
                  <Input id="worker-hours" type="number" placeholder="Ex: 40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="worker-status">Statut</Label>
                  <Select>
                    <SelectTrigger id="worker-status">
                      <SelectValue placeholder="Sélectionner un statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Actif</SelectItem>
                      <SelectItem value="leave">En congé</SelectItem>
                      <SelectItem value="sick">Malade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="worker-tasks">Tâches principales</Label>
                <Input id="worker-tasks" placeholder="Ex: Plantation, Récolte, Maintenance" />
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
        <Tabs defaultValue="workers">
          <TabsList className="mb-4">
            <TabsTrigger value="workers">Travailleurs</TabsTrigger>
            <TabsTrigger value="schedule">Planning</TabsTrigger>
          </TabsList>

          <TabsContent value="workers">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Heures/semaine</TableHead>
                    <TableHead>Tâches principales</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workers.map((worker) => (
                    <TableRow key={worker.id}>
                      <TableCell className="font-medium">{worker.name}</TableCell>
                      <TableCell>{worker.role}</TableCell>
                      <TableCell>{getStatusBadge(worker.status)}</TableCell>
                      <TableCell>{worker.hours}</TableCell>
                      <TableCell>{worker.tasks.join(", ")}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Calendar className="h-4 w-4" />
                            <span className="sr-only">Planning</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Clock className="h-4 w-4" />
                            <span className="sr-only">Heures</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">Total: 4 travailleurs</span>
              </div>
              <div className="text-sm text-muted-foreground">3 actifs, 1 en congé</div>
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 bg-muted">Jour</th>
                    <th className="border p-2 bg-muted">Matin (8h-12h)</th>
                    <th className="border p-2 bg-muted">Après-midi (13h-17h)</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((day, index) => (
                    <tr key={index}>
                      <td className="border p-2 font-medium">{day.day}</td>
                      <td className="border p-2">
                        {day.morning.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {day.morning.map((worker, i) => (
                              <Badge key={i} variant="outline">
                                {worker}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="border p-2">
                        {day.afternoon.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {day.afternoon.map((worker, i) => (
                              <Badge key={i} variant="outline">
                                {worker}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Modifier le planning
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

