import type { Metadata } from "next"
import Link from "next/link"
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"

export const metadata: Metadata = {
  title: "Forgot Password | AgriSmart",
  description: "Reset your AgriSmart password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Mot de passe oublié</h1>
          <p className="text-sm text-muted-foreground">
            Entrez votre adresse e-mail pour réinitialiser votre mot de passe
          </p>
        </div>
        <ForgotPasswordForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/login" className="hover:text-brand underline underline-offset-4">
            Retour à la connexion
          </Link>
        </p>
      </div>
    </div>
  )
}

