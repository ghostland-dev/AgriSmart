import type React from "react"
import { LanguageSwitcher } from "@/components/auth/language-switcher"
import { ThemeSwitcher } from "@/components/auth/theme-switcher"
import Link from "next/link"
import { Sprout } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sprout className="h-6 w-6 text-primary" />
            <div className="font-bold text-xl">AgriSmart</div>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">{children}</main>
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AgriSmart. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

