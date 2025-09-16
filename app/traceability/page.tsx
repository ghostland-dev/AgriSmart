import { ProductTraceability } from "@/components/product-traceability"
import { TraceabilityMap } from "@/components/traceability-map"
import { CertificationStatus } from "@/components/certification-status"
import { QRCodeGenerator } from "@/components/qrcode-generator"

export default function TraceabilityPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Traçabilité des produits</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ProductTraceability />
        </div>
        <div className="space-y-6">
          <CertificationStatus />
          <QRCodeGenerator />
        </div>
      </div>

      <TraceabilityMap />
    </div>
  )
}

