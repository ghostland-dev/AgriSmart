"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "@/components/language-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({
    message: "Veuillez entrer une adresse e-mail valide.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères.",
  }),
})

export function LoginForm() {
  const { t } = useTranslation()
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, we'll just check for a specific email/password
      if (values.email === "demo@agrismart.com" && values.password === "password123") {
        login({
          id: "1",
          name: "Utilisateur Démo",
          email: values.email,
          role: "admin",
        })

        router.push("/dashboard")
      } else {
        toast({
          variant: "destructive",
          title: "Échec de la connexion",
          description: "Email ou mot de passe incorrect.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Échec de la connexion",
        description: "Une erreur s'est produite. Veuillez réessayer.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="exemple@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
            >
              Mot de passe oublié?
            </Link>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connexion en cours...
              </>
            ) : (
              "Se connecter"
            )}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" disabled={isLoading}>
          Google
        </Button>
        <Button variant="outline" disabled={isLoading}>
          Microsoft
        </Button>
      </div>
      <div className="text-center text-sm text-muted-foreground mt-2">
        <p>
          Pour la démo, utilisez: <br />
          <span className="font-medium">Email: demo@agrismart.com</span>
          <br />
          <span className="font-medium">Mot de passe: password123</span>
        </p>
      </div>
    </div>
  )
}

