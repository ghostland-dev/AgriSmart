"use client"

import { Bell, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "./language-provider"
import { useAuth } from "./auth/auth-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeSwitcher } from "./auth/theme-switcher"
import { LanguageSwitcher } from "./auth/language-switcher"

export default function Header() {
  const { t } = useTranslation()
  const { user, logout } = useAuth()

  return (
    <header className="h-14 border-b px-4 flex items-center justify-between bg-background">
      <div className="flex-1"></div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">{t("alerts")}</span>
        </Button>

        <ThemeSwitcher />
        <LanguageSwitcher />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt={user?.name || "User"} />
                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium">{user?.name || "Utilisateur"}</p>
                <p className="w-[200px] truncate text-sm text-muted-foreground">
                  {user?.email || "utilisateur@exemple.com"}
                </p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" />
              {t("profile")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              {t("logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

