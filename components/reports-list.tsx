"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Eye, Trash2, Search, Filter } from "lucide-react"
import { useTranslation } from "./language-provider"

export function ReportsList() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")

  // Sample reports data
  const reports = [
    {
      id: 1,
      name: "Rapport de rendement annuel",
      type: "yield",
      date: "15/06/2023",
      author: "Ahmed B.",
      format: "PDF",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Analyse des coûts par culture",
      type: "financial",
      date: "02/05/2023",
      author: "Marie D.",
      format: "XLSX",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Inventaire des ressources",
      type: "inventory",
      date: "28/04/2023",
      author: "Karim A.",
      format: "PDF",
      size: "3.1 MB",
    },
    {
      id: 4,
      name: "Rapport météorologique trimestriel",
      type: "weather",
      date: "15/04/2023",
      author: "Système",
      format: "PDF",
      size: "5.2 MB",
    },
    {
      id: 5,
      name: "Planification des cultures",
      type: "planning",
      date: "01/04/2023",
      author: "Sophie M.",
      format: "XLSX",
      size: "1.2 MB",
    },
    {
      id: 6,
      name: "Suivi des tâches agricoles",
      type: "tasks",
      date: "15/03/2023",
      author: "Ahmed B.",
      format: "PDF",
      size: "1.9 MB",
    },
  ]

  // Function to get badge for report type
  const getReportTypeBadge = (type: string) => {
    switch (type) {
      case "yield":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Rendement
          </Badge>
        )
      case "financial":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Financier
          </Badge>
        )
      case "inventory":
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
            Inventaire
          </Badge>
        )
      case "weather":
        return (
          <Badge variant="outline" className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">
            Météo
          </Badge>
        )
      case "planning":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Planification
          </Badge>
        )
      case "tasks":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Tâches
          </Badge>
        )
      default:
        return <Badge variant="outline">Autre</Badge>
    }
  }

  // Function to get icon for report format
  const getFormatIcon = (format: string) => {
    return <FileText className="h-4 w-4 mr-1" />
  }

  // Filter reports based on search term
  const filteredReports = reports.filter(
    (report) =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Rapports générés</CardTitle>
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
          <Select defaultValue="all">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="yield">Rendement</SelectItem>
              <SelectItem value="financial">Financier</SelectItem>
              <SelectItem value="inventory">Inventaire</SelectItem>
              <SelectItem value="weather">Météo</SelectItem>
              <SelectItem value="planning">Planification</SelectItem>
              <SelectItem value="tasks">Tâches</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom du rapport</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Auteur</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Taille</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.name}</TableCell>
                  <TableCell>{getReportTypeBadge(report.type)}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.author}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {getFormatIcon(report.format)}
                      <span>{report.format}</span>
                    </div>
                  </TableCell>
                  <TableCell>{report.size}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Voir</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Télécharger</span>
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
      </CardContent>
    </Card>
  )
}

