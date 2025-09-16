"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layers, MapPin, Maximize, Minimize, Droplets, Thermometer } from "lucide-react"
import { useTranslation } from "./language-provider"

export function FarmMap() {
  const { t } = useTranslation()
  const [zoom, setZoom] = useState(1)
  const [selectedField, setSelectedField] = useState<string | null>(null)

  // Sample field data
  const fields = [
    { id: "field-a", name: "Parcelle A", crop: "Maïs", area: "5 ha", status: "growing" },
    { id: "field-b", name: "Parcelle B", crop: "Blé", area: "8 ha", status: "growing" },
    { id: "field-c", name: "Parcelle C", crop: "Laitue", area: "1 ha", status: "ready" },
    { id: "field-d", name: "Parcelle D", crop: "Soja", area: "6 ha", status: "planned" },
    { id: "greenhouse-1", name: "Serre 1", crop: "Tomates", area: "0.5 ha", status: "growing" },
  ]

  // Sample sensor data
  const sensorData = {
    "field-a": { moisture: 45, temperature: 22, lastUpdated: "Il y a 10 minutes" },
    "field-b": { moisture: 38, temperature: 21, lastUpdated: "Il y a 15 minutes" },
    "field-c": { moisture: 52, temperature: 20, lastUpdated: "Il y a 5 minutes" },
    "field-d": { moisture: 40, temperature: 23, lastUpdated: "Il y a 20 minutes" },
    "greenhouse-1": { moisture: 65, temperature: 26, lastUpdated: "Il y a 2 minutes" },
  }

  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "planned":
        return "bg-blue-200"
      case "growing":
        return "bg-green-200"
      case "ready":
        return "bg-yellow-200"
      case "harvested":
        return "bg-gray-200"
      default:
        return "bg-gray-100"
    }
  }

  // Function to handle field click
  const handleFieldClick = (fieldId: string) => {
    setSelectedField(fieldId === selectedField ? null : fieldId)
  }

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Carte de l'exploitation</CardTitle>
        <div className="ml-auto flex items-center space-x-2">
          <Tabs defaultValue="satellite" className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="satellite">Satellite</TabsTrigger>
              <TabsTrigger value="schematic">Schématique</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="icon" onClick={() => setZoom(Math.min(zoom + 0.2, 2))}>
            <Maximize className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setZoom(Math.max(zoom - 0.2, 0.6))}>
            <Minimize className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Layers className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[400px] border rounded-md overflow-hidden bg-gray-100">
          {/* Map visualization */}
          <div
            className="absolute inset-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
          >
            {/* This would be replaced with an actual map component in production */}
            <div className="relative w-full h-full">
              {/* Field representations */}
              {fields.map((field) => (
                <div
                  key={field.id}
                  className={`absolute cursor-pointer transition-all ${getStatusColor(field.status)} ${
                    selectedField === field.id ? "ring-2 ring-primary" : ""
                  }`}
                  style={{
                    top:
                      field.id === "field-a"
                        ? "10%"
                        : field.id === "field-b"
                          ? "30%"
                          : field.id === "field-c"
                            ? "60%"
                            : field.id === "field-d"
                              ? "40%"
                              : "75%",
                    left:
                      field.id === "field-a"
                        ? "20%"
                        : field.id === "field-b"
                          ? "50%"
                          : field.id === "field-c"
                            ? "30%"
                            : field.id === "field-d"
                              ? "70%"
                              : "10%",
                    width: field.id === "greenhouse-1" ? "10%" : field.id === "field-c" ? "15%" : "20%",
                    height: field.id === "greenhouse-1" ? "10%" : field.id === "field-c" ? "15%" : "20%",
                    borderRadius: field.id === "greenhouse-1" ? "0" : "4px",
                  }}
                  onClick={() => handleFieldClick(field.id)}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                    {field.name}
                  </div>
                </div>
              ))}

              {/* Sensor markers */}
              {Object.keys(sensorData).map((fieldId) => (
                <div
                  key={`sensor-${fieldId}`}
                  className="absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
                  style={{
                    top:
                      fieldId === "field-a"
                        ? "15%"
                        : fieldId === "field-b"
                          ? "35%"
                          : fieldId === "field-c"
                            ? "65%"
                            : fieldId === "field-d"
                              ? "45%"
                              : "80%",
                    left:
                      fieldId === "field-a"
                        ? "25%"
                        : fieldId === "field-b"
                          ? "55%"
                          : fieldId === "field-c"
                            ? "35%"
                            : fieldId === "field-d"
                              ? "75%"
                              : "15%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                >
                  <Droplets className="h-3 w-3 text-blue-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Field info panel */}
          {selectedField && (
            <div className="absolute bottom-4 right-4 w-64 bg-white p-4 rounded-md shadow-lg">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{fields.find((f) => f.id === selectedField)?.name}</h3>
                <Badge>{fields.find((f) => f.id === selectedField)?.crop}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Surface: {fields.find((f) => f.id === selectedField)?.area}
              </p>

              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Droplets className="h-4 w-4 text-blue-500 mr-1" />
                    <span className="text-sm">Humidité</span>
                  </div>
                  <span className="text-sm font-medium">
                    {sensorData[selectedField as keyof typeof sensorData]?.moisture}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Thermometer className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm">Température</span>
                  </div>
                  <span className="text-sm font-medium">
                    {sensorData[selectedField as keyof typeof sensorData]?.temperature}°C
                  </span>
                </div>
              </div>

              <div className="mt-2 text-xs text-muted-foreground">
                Mis à jour: {sensorData[selectedField as keyof typeof sensorData]?.lastUpdated}
              </div>
            </div>
          )}

          {/* Map attribution */}
          <div className="absolute bottom-2 left-2 text-xs text-muted-foreground bg-white/80 px-1 rounded">
            © AgriSmart Cartographie
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {fields.map((field) => (
            <Button
              key={field.id}
              variant={selectedField === field.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleFieldClick(field.id)}
            >
              <MapPin className="h-4 w-4 mr-1" />
              {field.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

