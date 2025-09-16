"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-destructive">Erreur</h1>
        <h2 className="mt-4 text-2xl font-semibold">Une erreur s'est produite</h2>
        <p className="mt-2 text-muted-foreground">Nous sommes désolés, une erreur inattendue s'est produite.</p>
        <Button onClick={reset} className="mt-6">
          Réessayer
        </Button>
      </div>
    </div>
  )
}

