"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign, Calendar } from "lucide-react"
import { useTranslation } from "./language-provider"

export function FinancialSummary() {
  const { t } = useTranslation()

  // Sample financial data
  const financialData = {
    revenue: 28500,
    expenses: 16200,
    profit: 12300,
    profitMargin: 43.2,
    trend: "+8.5%",
    period: "Année en cours",
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center pb-2">
        <CardTitle className="text-base">Résumé financier</CardTitle>
        <Button variant="ghost" size="sm" className="ml-auto">
          <Calendar className="h-4 w-4 mr-1" />
          {financialData.period}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Revenus</p>
              <p className="text-2xl font-bold">{financialData.revenue.toLocaleString()} €</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Dépenses</p>
              <p className="text-2xl font-bold">{financialData.expenses.toLocaleString()} €</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            </div>
          </div>

          <div className="pt-2 border-t">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Bénéfice</p>
                <p className="text-2xl font-bold">{financialData.profit.toLocaleString()} €</p>
              </div>
              <div className="flex items-center text-green-500">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{financialData.trend}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Marge bénéficiaire: <span className="font-medium">{financialData.profitMargin}%</span>
            </p>
          </div>

          <Button variant="outline" className="w-full mt-2">
            <DollarSign className="h-4 w-4 mr-2" />
            Voir les détails financiers
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

