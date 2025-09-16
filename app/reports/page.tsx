import { ReportsList } from "@/components/reports-list"
import { ReportGenerator } from "@/components/report-generator"
import { ExportOptions } from "@/components/export-options"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Rapports</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <ReportGenerator />
        <ExportOptions />
      </div>

      <ReportsList />
    </div>
  )
}

