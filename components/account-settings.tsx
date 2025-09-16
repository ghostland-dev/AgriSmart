"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "./language-provider"

export function AccountSettings() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Paramètres du compte</CardTitle>
        <CardDescription>Gérez les informations de votre compte et vos préférences</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="security">Sécurité</TabsTrigger>
            <TabsTrigger value="farm">Exploitation</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  Changer la photo
                </Button>
                <Button variant="ghost" size="sm">
                  Supprimer
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Prénom</Label>
                <Input id="first-name" defaultValue="Jean" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Nom</Label>
                <Input id="last-name" defaultValue="Dupont" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Adresse e-mail</Label>
              <Input id="email" type="email" defaultValue="jean.dupont@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Numéro de téléphone</Label>
              <Input id="phone" type="tel" defaultValue="+33 6 12 34 56 78" />
            </div>

            <div className="pt-4">
              <Button>Enregistrer les modifications</Button>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Mot de passe actuel</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-password">Nouveau mot de passe</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Authentification à deux facteurs</h3>
              <p className="text-sm text-muted-foreground">
                Ajoutez une couche de sécurité supplémentaire à votre compte en activant l'authentification à deux
                facteurs.
              </p>
              <Button variant="outline">Configurer l'authentification à deux facteurs</Button>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Sessions actives</h3>
              <p className="text-sm text-muted-foreground">Vous êtes actuellement connecté sur 2 appareils.</p>
              <Button variant="outline">Gérer les sessions</Button>
            </div>

            <div className="pt-4">
              <Button>Mettre à jour le mot de passe</Button>
            </div>
          </TabsContent>

          <TabsContent value="farm" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="farm-name">Nom de l'exploitation</Label>
              <Input id="farm-name" defaultValue="Ferme des Oliviers" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="farm-size">Taille de l'exploitation (ha)</Label>
                <Input id="farm-size" type="number" defaultValue="120" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farm-location">Localisation</Label>
                <Input id="farm-location" defaultValue="Région Centre, France" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="farm-description">Description</Label>
              <Input id="farm-description" defaultValue="Exploitation céréalière et maraîchère" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="farm-crops">Cultures principales</Label>
              <Input id="farm-crops" defaultValue="Blé, Maïs, Soja, Tomates" />
            </div>

            <div className="pt-4">
              <Button>Enregistrer les modifications</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

