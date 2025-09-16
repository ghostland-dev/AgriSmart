"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Sprout,
  Cloud,
  Package,
  BarChart,
  CheckSquare,
  Settings,
  FileText,
  Users,
  QrCode,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "./language-provider"

export default function Sidebar() {
  const pathname = usePathname()
  const { t, dir } = useTranslation()

  const routes = [
    {
      name: t("dashboard"),
      path: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: t("crops"),
      path: "/crops",
      icon: <Sprout className="h-5 w-5" />,
    },
    {
      name: t("weather"),
      path: "/weather",
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      name: t("resources"),
      path: "/resources",
      icon: <Package className="h-5 w-5" />,
    },
    {
      name: t("analytics"),
      path: "/analytics",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      name: t("tasks"),
      path: "/tasks",
      icon: <CheckSquare className="h-5 w-5" />,
    },
    {
      name: t("reports"),
      path: "/reports",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: t("suppliers"),
      path: "/suppliers",
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: t("traceability"),
      path: "/traceability",
      icon: <QrCode className="h-5 w-5" />,
    },
    {
      name: t("ai-advisor"),
      path: "/ai-advisor",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      name: t("settings"),
      path: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className="w-64 h-full bg-background border-r flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">AgriSmart</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-auto">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              pathname === route.path
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            style={{ flexDirection: dir() === "rtl" ? "row-reverse" : "row" }}
          >
            {route.icon}
            <span>{route.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

