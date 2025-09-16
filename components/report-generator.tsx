"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePicker } from "@/components/ui/date-picker"
import { FileText, FileSpreadsheet, BarChart } from "lucide-react"
import { useTranslation } from "./language-provider"

export function ReportGenerator() {
  const { t } = useTranslation()
  const [reportType, setReportType] = useState("yield")
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [format, setFormat] = useState("pdf")
  const [isGenerating, setIsGenerating] = useState(false)

  // Sample report options based on type
  const reportOptions = {
    yield: [
      { id: "yield-by-crop", label: "Rendement par culture" },
      { id: "yield-by-field", label: "Rendement par parcelle" },
      { id: "yield-comparison", label: "Comparaison avec années précédentes" },
      { id: "yield-forecast", label: "Prévisions de rendement" },
    ],
    financial: [
      { id: "financial-summary", label: "Résumé financier" },
      { id: "cost-breakdown", label: "Répartition des coûts" },
      { id: "profit-margin", label: "Marges bénéficiaires" },
      { id: "roi-analysis", label: "Analyse du retour sur investissement" },
    ],
    inventory: [
      { id: "inventory-summary", label: "Résumé de l'inventaire" },
      { id: "low-stock-alert", label: "Alertes de stock faible" },
      { id: "inventory-value", label: "Valeur de l'inventaire" },
      { id: "usage-trends", label: "Tendances d'utilisation" },
    ],
    weather: [
      { id: "weather-summary", label: "Résumé météorologique" },
      { id: "precipitation-analysis", label: "Analyse des précipitations" },
      { id: "temperature-trends", label: "Tendances de température" },
      { id: "weather-impact", label: "Impact sur les cultures" },
    ],
  }

  // Function to handle report generation
  const handleGenerateReport = () => {
    setIsGenerating(true)
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false)
      // Here you would typically handle the generated report
      alert("Rapport généré avec succès!")
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Générer un rapport</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="report-type">Type de rapport</Label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger id="report-type">
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yield">Rendement</SelectItem>
                <SelectItem value="financial">Financier</SelectItem>
                <SelectItem value="inventory">Inventaire</SelectItem>
                <SelectItem value="weather">Météo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Période</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date" className="text-xs text-muted-foreground">
                  Date de début
                </Label>
                <DatePicker date={startDate} setDate={setStartDate} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date" className="text-xs text-muted-foreground">
                  Date de fin
                </Label>
                <DatePicker date={endDate} setDate={setEndDate} />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Options du rapport</Label>
            <div className="grid gap-2">
              {reportOptions[reportType as keyof typeof reportOptions]?.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="report-format">Format</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger id="report-format">
                <SelectValue placeholder="Sélectionner un format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    PDF
                  </div>
                </SelectItem>
                <SelectItem value="xlsx">
                  <div className="flex items-center">
                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                    Excel (XLSX)
                  </div>
                </SelectItem>
                <SelectItem value="csv">
                  <div className="flex items-center">
                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                    CSV
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full" onClick={handleGenerateReport} disabled={isGenerating}>
            <BarChart className="h-4 w-4 mr-2" />
            {isGenerating ? "Génération en cours..." : "Générer le rapport"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

