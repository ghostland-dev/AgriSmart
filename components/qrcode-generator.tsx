"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { QrCode, Download, Share2, Printer } from "lucide-react"
import { useTranslation } from "./language-provider"

export function QRCodeGenerator() {
  const { t } = useTranslation()
  const [productId, setProductId] = useState("BLE-2023-001")
  const [qrSize, setQrSize] = useState("medium")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Générateur de QR Code</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="product-select">Produit</Label>
            <Select value={productId} onValueChange={setProductId}>
              <SelectTrigger id="product-select">
                <SelectValue placeholder="Sélectionner un produit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BLE-2023-001">BLE-2023-001 (Blé tendre)</SelectItem>
                <SelectItem value="MAIS-2023-001">MAIS-2023-001 (Maïs)</SelectItem>
                <SelectItem value="SOJA-2023-001">SOJA-2023-001 (Soja)</SelectItem>
                <SelectItem value="TOM-2023-001">TOM-2023-001 (Tomates)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="qr-size">Taille</Label>
            <Select value={qrSize} onValueChange={setQrSize}>
              <SelectTrigger id="qr-size">
                <SelectValue placeholder="Sélectionner une taille" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Petite</SelectItem>
                <SelectItem value="medium">Moyenne</SelectItem>
                <SelectItem value="large">Grande</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center py-4">
            <div className="border rounded-md p-4 bg-white">
              <div className="w-32 h-32 flex items-center justify-center">
                <QrCode className="h-24 w-24" />
              </div>
              <div className="text-center mt-2 text-xs font-medium">{productId}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" />
              <span className="text-xs">Télécharger</span>
            </Button>
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-1" />
              <span className="text-xs">Imprimer</span>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-1" />
              <span className="text-xs">Partager</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

