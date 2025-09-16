import { SuppliersList } from "@/components/suppliers-list"
import { SupplierForm } from "@/components/supplier-form"
import { SupplierContacts } from "@/components/supplier-contacts"

export default function SuppliersPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Fournisseurs</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <SuppliersList />
        </div>
        <div className="space-y-6">
          <SupplierForm />
          <SupplierContacts />
        </div>
      </div>
    </div>
  )
}

