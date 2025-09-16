"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Share2, Mail, Printer, Cloud, Lock } from "lucide-react"
import { useTranslation } from "./language-provider"

export function ExportOptions() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Options d'exportation</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="export">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="export">Exporter</TabsTrigger>
            <TabsTrigger value="share">Partager</TabsTrigger>
          </TabsList>

          <TabsContent value="export" className="space-y-4">
            <div className="space-y-2">
              <Label>Format d'exportation</Label>
              <RadioGroup defaultValue="pdf" className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <RadioGroupItem value="pdf" id="pdf" />
                  <Label htmlFor="pdf" className="flex items-center">
                    <FileIcon className="h-4 w-4 mr-2" />
                    PDF
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <RadioGroupItem value="excel" id="excel" />
                  <Label htmlFor="excel" className="flex items-center">
                    <SpreadsheetIcon className="h-4 w-4 mr-2" />
                    Excel
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <RadioGroupItem value="csv" id="csv" />
                  <Label htmlFor="csv" className="flex items-center">
                    <SpreadsheetIcon className="h-4 w-4 mr-2" />
                    CSV
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <RadioGroupItem value="image" id="image" />
                  <Label htmlFor="image" className="flex items-center">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Image
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Options</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="include-charts" className="cursor-pointer">
                    Inclure les graphiques
                  </Label>
                  <Switch id="include-charts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="include-raw-data" className="cursor-pointer">
                    Inclure les données brutes
                  </Label>
                  <Switch id="include-raw-data" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="compress" className="cursor-pointer">
                    Compresser (ZIP)
                  </Label>
                  <Switch id="compress" />
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Télécharger
              </Button>
              <Button variant="outline">
                <Printer className="h-4 w-4 mr-2" />
                Imprimer
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="share" className="space-y-4">
            <div className="space-y-2">
              <Label>Options de partage</Label>
              <RadioGroup defaultValue="email" className="grid gap-2">
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email" className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Envoyer par e-mail
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <RadioGroupItem value="link" id="link" />
                  <Label htmlFor="link" className="flex items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Générer un lien de partage
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <RadioGroupItem value="cloud" id="cloud" />
                  <Label htmlFor="cloud" className="flex items-center">
                    <Cloud className="h-4 w-4 mr-2" />
                    Sauvegarder dans le cloud
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Sécurité</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password-protect" className="cursor-pointer flex items-center">
                    <Lock className="h-4 w-4 mr-2" />
                    Protéger par mot de passe
                  </Label>
                  <Switch id="password-protect" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="expiry" className="cursor-pointer flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Définir une date d'expiration
                  </Label>
                  <Switch id="expiry" />
                </div>
              </div>
            </div>

            <Button className="w-full">
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

// Helper components for icons
function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

function SpreadsheetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
      <line x1="8" y1="9" x2="10" y2="9" />
    </svg>
  )
}

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

