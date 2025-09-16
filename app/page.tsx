"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/auth/theme-switcher"
import { LanguageSwitcher } from "@/components/auth/language-switcher"
import { Sprout, BarChart, Cloud, Shield } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"

export default function Home() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Redirect to dashboard if already authenticated
    if (isAuthenticated) {
      router.push("/dashboard")
    }
  }, [isAuthenticated, router])

  // Avoid hydration mismatch
  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold text-2xl">AgriSmart</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/login">Se connecter</Link>
              </Button>
              <Button asChild>
                <Link href="/register">S'inscrire</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Gérez votre exploitation agricole <span className="text-primary">intelligemment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-10">
              AgriSmart vous aide à optimiser vos rendements, suivre vos cultures et prendre des décisions éclairées
              grâce à l'intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/register">Commencer gratuitement</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Connexion</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités principales</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Sprout className="h-10 w-10 text-primary" />}
                title="Gestion des cultures"
                description="Suivez vos cultures de la plantation à la récolte avec des données précises."
              />
              <FeatureCard
                icon={<Cloud className="h-10 w-10 text-primary" />}
                title="Prévisions météo"
                description="Obtenez des prévisions météorologiques précises et des alertes personnalisées."
              />
              <FeatureCard
                icon={<BarChart className="h-10 w-10 text-primary" />}
                title="Analyses avancées"
                description="Visualisez vos données et obtenez des insights pour optimiser vos rendements."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Traçabilité complète"
                description="Assurez la traçabilité de vos produits de la ferme à l'assiette."
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos utilisateurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="AgriSmart a transformé la façon dont je gère mon exploitation. J'ai augmenté mes rendements de 15% en un an."
                author="Jean Dupont"
                role="Agriculteur céréalier"
              />
              <TestimonialCard
                quote="L'interface est intuitive et les prévisions météo sont d'une précision remarquable. Un outil indispensable."
                author="Marie Martin"
                role="Viticultrice"
              />
              <TestimonialCard
                quote="Le module de traçabilité m'a permis d'obtenir facilement ma certification bio. Je recommande vivement."
                author="Ahmed Benali"
                role="Producteur maraîcher"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre exploitation ?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Rejoignez des milliers d'agriculteurs qui utilisent AgriSmart pour optimiser leur production.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">Commencer maintenant</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">AgriSmart</span>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                À propos
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Fonctionnalités
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Tarifs
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AgriSmart. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="p-6 rounded-lg border bg-card">
      <p className="italic mb-4">{quote}</p>
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}

