import type React from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex h-full w-64 flex-col">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

