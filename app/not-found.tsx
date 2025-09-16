import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page non trouvée</h2>
        <p className="mt-2 text-muted-foreground">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Button asChild className="mt-6">
          <Link href="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  )
}

