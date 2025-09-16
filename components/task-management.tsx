"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash2, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { useTranslation } from "./language-provider"

export function TaskManagement() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  // Sample tasks data
  const tasks = [
    {
      id: 1,
      title: "Irriguer le champ de maïs",
      description: "Appliquer 20mm d'eau sur la parcelle A",
      assignedTo: "Ahmed Benali",
      dueDate: "2023-06-20",
      priority: "high",
      status: "pending",
      category: "irrigation",
    },
    {
      id: 2,
      title: "Appliquer l'engrais azoté",
      description: "Appliquer 80kg/ha d'azote sur la parcelle B",
      assignedTo: "Marie Dubois",
      dueDate: "2023-06-21",
      priority: "medium",
      status: "pending",
      category: "fertilization",
    },
    {
      id: 3,
      title: "Inspecter les cultures pour détecter les parasites",
      description: "Vérifier les signes d'infestation sur toutes les parcelles",
      assignedTo: "Karim Alaoui",
      dueDate: "2023-06-19",
      priority: "medium",
      status: "completed",
      category: "inspection",
    },
    {
      id: 4,
      title: "Récolter la laitue",
      description: "Récolter la laitue sur la parcelle C",
      assignedTo: "Sophie Martin",
      dueDate: "2023-06-22",
      priority: "high",
      status: "pending",
      category: "harvest",
    },
    {
      id: 5,
      title: "Maintenance du tracteur",
      description: "Effectuer l'entretien régulier du tracteur John Deere",
      assignedTo: "Marie Dubois",
      dueDate: "2023-06-25",
      priority: "low",
      status: "pending",
      category: "maintenance",
    },
  ]

  // Function to get priority badge
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Haute</Badge>
      case "medium":
        return (
          <Badge variant="secondary" className="bg-amber-500">
            Moyenne
          </Badge>
        )
      case "low":
        return <Badge variant="outline">Basse</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  // Function to get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Terminée</Badge>
      case "in_progress":
        return <Badge variant="secondary">En cours</Badge>
      case "pending":
        return <Badge variant="outline">En attente</Badge>
      case "overdue":
        return <Badge variant="destructive">En retard</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Function to get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "irrigation":
        return (
          <div className="bg-blue-100 p-1 rounded-full">
            <Clock className="h-4 w-4 text-blue-500" />
          </div>
        )
      case "fertilization":
        return (
          <div className="bg-green-100 p-1 rounded-full">
            <Clock className="h-4 w-4 text-green-500" />
          </div>
        )
      case "inspection":
        return (
          <div className="bg-amber-100 p-1 rounded-full">
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
        )
      case "harvest":
        return (
          <div className="bg-red-100 p-1 rounded-full">
            <Clock className="h-4 w-4 text-red-500" />
          </div>
        )
      case "maintenance":
        return (
          <div className="bg-purple-100 p-1 rounded-full">
            <Clock className="h-4 w-4 text-purple-500" />
          </div>
        )
      default:
        return (
          <div className="bg-gray-100 p-1 rounded-full">
            <Clock className="h-4 w-4 text-gray-500" />
          </div>
        )
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Tâches</CardTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="ml-auto">
              <Plus className="h-4 w-4 mr-2" />
              Ajouter une tâche
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Ajouter une nouvelle tâche</DialogTitle>
              <DialogDescription>Entrez les détails de la tâche à créer.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="task-title">Titre de la tâche</Label>
                <Input id="task-title" placeholder="Ex: Irriguer le champ de maïs" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="task-description">Description</Label>
                <Textarea id="task-description" placeholder="Décrivez la tâche en détail..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="task-category">Catégorie</Label>
                  <Select>
                    <SelectTrigger id="task-category">
                      <SelectValue placeholder="Sélectionner une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="irrigation">Irrigation</SelectItem>
                      <SelectItem value="fertilization">Fertilisation</SelectItem>
                      <SelectItem value="inspection">Inspection</SelectItem>
                      <SelectItem value="harvest">Récolte</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="task-priority">Priorité</Label>
                  <Select>
                    <SelectTrigger id="task-priority">
                      <SelectValue placeholder="Sélectionner une priorité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">Haute</SelectItem>
                      <SelectItem value="medium">Moyenne</SelectItem>
                      <SelectItem value="low">Basse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="task-assigned">Assignée à</Label>
                  <Select>
                    <SelectTrigger id="task-assigned">
                      <SelectValue placeholder="Sélectionner une personne" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ahmed">Ahmed Benali</SelectItem>
                      <SelectItem value="marie">Marie Dubois</SelectItem>
                      <SelectItem value="karim">Karim Alaoui</SelectItem>
                      <SelectItem value="sophie">Sophie Martin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="task-due-date">Date d'échéance</Label>
                  <Input id="task-due-date" type="date" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Annuler
              </Button>
              <Button onClick={() => setOpen(false)}>Créer la tâche</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pending">
          <TabsList className="mb-4">
            <TabsTrigger value="pending">En attente</TabsTrigger>
            <TabsTrigger value="completed">Terminées</TabsTrigger>
            <TabsTrigger value="all">Toutes</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tâche</TableHead>
                    <TableHead>Assignée à</TableHead>
                    <TableHead>Échéance</TableHead>
                    <TableHead>Priorité</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks
                    .filter((task) => task.status !== "completed")
                    .map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <div className="flex items-start gap-2">
                            {getCategoryIcon(task.category)}
                            <div>
                              <div className="font-medium">{task.title}</div>
                              <div className="text-xs text-muted-foreground">{task.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{task.assignedTo}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                        <TableCell>{getStatusBadge(task.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <CheckCircle2 className="h-4 w-4" />
                              <span className="sr-only">Terminer</span>
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

          <TabsContent value="completed">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tâche</TableHead>
                    <TableHead>Assignée à</TableHead>
                    <TableHead>Échéance</TableHead>
                    <TableHead>Priorité</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks
                    .filter((task) => task.status === "completed")
                    .map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <div className="flex items-start gap-2">
                            {getCategoryIcon(task.category)}
                            <div>
                              <div className="font-medium">{task.title}</div>
                              <div className="text-xs text-muted-foreground">{task.description}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{task.assignedTo}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                        <TableCell>{getStatusBadge(task.status)}</TableCell>
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
                    <TableHead>Tâche</TableHead>
                    <TableHead>Assignée à</TableHead>
                    <TableHead>Échéance</TableHead>
                    <TableHead>Priorité</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <div className="flex items-start gap-2">
                          {getCategoryIcon(task.category)}
                          <div>
                            <div className="font-medium">{task.title}</div>
                            <div className="text-xs text-muted-foreground">{task.description}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{task.assignedTo}</TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                      <TableCell>{getStatusBadge(task.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {task.status !== "completed" && (
                            <Button variant="ghost" size="icon">
                              <CheckCircle2 className="h-4 w-4" />
                              <span className="sr-only">Terminer</span>
                            </Button>
                          )}
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

        <div className="mt-4 flex items-center gap-2 text-amber-500">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">2 tâches à haute priorité en attente</span>
        </div>
      </CardContent>
    </Card>
  )
}

