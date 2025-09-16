import type { Metadata } from "next"
import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login | AgriSmart",
  description: "Login to your AgriSmart account",
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Bienvenue sur AgriSmart</h1>
          <p className="text-sm text-muted-foreground">
            Connectez-vous à votre compte pour accéder à votre tableau de bord
          </p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/register" className="hover:text-brand underline underline-offset-4">
            Vous n&apos;avez pas de compte? Inscrivez-vous
          </Link>
        </p>
      </div>
    </div>
  )
}

