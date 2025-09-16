"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useTranslation } from "./language-provider"

export function CropCalendar() {
  const { t } = useTranslation()

  const crops = [
    {
      id: 1,
      name: "Corn",
      field: "Field A",
      plantingDate: "2023-04-15",
      harvestDate: "2023-09-01",
      status: "growing",
    },
    {
      id: 2,
      name: "Wheat",
      field: "Field B",
      plantingDate: "2023-03-10",
      harvestDate: "2023-07-20",
      status: "growing",
    },
    {
      id: 3,
      name: "Tomatoes",
      field: "Greenhouse 1",
      plantingDate: "2023-05-01",
      harvestDate: "2023-08-15",
      status: "growing",
    },
    {
      id: 4,
      name: "Lettuce",
      field: "Field C",
      plantingDate: "2023-05-15",
      harvestDate: "2023-06-30",
      status: "ready",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "planned":
        return <Badge variant="outline">Planned</Badge>
      case "growing":
        return <Badge variant="secondary">Growing</Badge>
      case "ready":
        return <Badge variant="success">Ready to Harvest</Badge>
      case "harvested":
        return <Badge variant="default">Harvested</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("cropCalendar")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("cropType")}</TableHead>
              <TableHead>{t("field")}</TableHead>
              <TableHead>{t("plantingDate")}</TableHead>
              <TableHead>{t("harvestDate")}</TableHead>
              <TableHead>{t("status")}</TableHead>
              <TableHead className="text-right">{t("actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {crops.map((crop) => (
              <TableRow key={crop.id}>
                <TableCell className="font-medium">{crop.name}</TableCell>
                <TableCell>{crop.field}</TableCell>
                <TableCell>{crop.plantingDate}</TableCell>
                <TableCell>{crop.harvestDate}</TableCell>
                <TableCell>{getStatusBadge(crop.status)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

