"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Truck, Factory, Warehouse, ShoppingBag, Map } from "lucide-react"
import { useTranslation } from "./language-provider"

export function TraceabilityMap() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Carte de traçabilité</CardTitle>
        <div className="ml-auto flex items-center space-x-2">
          <Select defaultValue="ble-2023-001">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sélectionner un produit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ble-2023-001">BLE-2023-001 (Blé tendre)</SelectItem>
              <SelectItem value="mais-2023-001">MAIS-2023-001 (Maïs)</SelectItem>
              <SelectItem value="soja-2023-001">SOJA-2023-001 (Soja)</SelectItem>
              <SelectItem value="tom-2023-001">TOM-2023-001 (Tomates)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Map className="h-4 w-4 mr-2" />
            Vue satellite
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[400px] border rounded-md overflow-hidden bg-gray-100">
          {/* Map visualization */}
          <div className="absolute inset-0">
            {/* This would be replaced with an actual map component in production */}
            <div className="relative w-full h-full">
              {/* Origin point */}
              <div className="absolute flex flex-col items-center" style={{ top: "30%", left: "20%" }}>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="mt-1 px-2 py-1 bg-white rounded shadow-sm text-xs font-medium">Parcelle A</div>
              </div>

              {/* Processing point */}
              <div className="absolute flex flex-col items-center" style={{ top: "40%", left: "40%" }}>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <Factory className="h-5 w-5" />
                </div>
                <div className="mt-1 px-2 py-1 bg-white rounded shadow-sm text-xs font-medium">Traitement</div>
              </div>

              {/* Storage point */}
              <div className="absolute flex flex-col items-center" style={{ top: "30%", left: "60%" }}>
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white">
                  <Warehouse className="h-5 w-5" />
                </div>
                <div className="mt-1 px-2 py-1 bg-white rounded shadow-sm text-xs font-medium">Coopérative</div>
              </div>

              {/* Destination point */}
              <div className="absolute flex flex-col items-center" style={{ top: "50%", left: "80%" }}>
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div className="mt-1 px-2 py-1 bg-white rounded shadow-sm text-xs font-medium">Minoterie</div>
              </div>

              {/* Path lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
                <path
                  d="M 160,120 L 320,160 L 480,120 L 640,200"
                  stroke="#6366F1"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                />
                {/* Transport icons along the path */}
                <circle cx="240" cy="140" r="12" fill="white" />
                <foreignObject x="228" y="128" width="24" height="24">
                  <div className="flex items-center justify-center text-purple-500">
                    <Truck className="h-4 w-4" />
                  </div>
                </foreignObject>

                <circle cx="400" cy="140" r="12" fill="white" />
                <foreignObject x="388" y="128" width="24" height="24">
                  <div className="flex items-center justify-center text-purple-500">
                    <Truck className="h-4 w-4" />
                  </div>
                </foreignObject>

                <circle cx="560" cy="160" r="12" fill="white" />
                <foreignObject x="548" y="148" width="24" height="24">
                  <div className="flex items-center justify-center text-purple-500">
                    <Truck className="h-4 w-4" />
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>

          {/* Map legend */}
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-sm">
            <div className="text-xs font-medium mb-1">Légende</div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs">Origine</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs">Traitement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-xs">Stockage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs">Destination</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-xs">Transport</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 text-center">
          <div className="p-2 border rounded-md">
            <div className="text-xs text-muted-foreground">Distance totale</div>
            <div className="font-medium">120 km</div>
          </div>
          <div className="p-2 border rounded-md">
            <div className="text-xs text-muted-foreground">Émissions CO2</div>
            <div className="font-medium">85 kg</div>
          </div>
          <div className="p-2 border rounded-md">
            <div className="text-xs text-muted-foreground">Temps de transport</div>
            <div className="font-medium">3h 20min</div>
          </div>
          <div className="p-2 border rounded-md">
            <div className="text-xs text-muted-foreground">Étapes</div>
            <div className="font-medium">4</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

