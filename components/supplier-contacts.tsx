"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, ExternalLink, Star } from "lucide-react"
import { useTranslation } from "./language-provider"

export function SupplierContacts() {
  const { t } = useTranslation()

  // Sample recent contacts data
  const recentContacts = [
    {
      id: 1,
      name: "AgriSeed",
      contact: "Jean Dupont",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AS",
      phone: "+33 1 23 45 67 89",
      email: "contact@agriseed.com",
      type: "seeds",
      rating: 5,
    },
    {
      id: 4,
      name: "EcoPest",
      contact: "Sophie Leroy",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EP",
      phone: "+33 1 23 45 67 92",
      email: "info@ecopest.com",
      type: "pesticides",
      rating: 5,
    },
    {
      id: 2,
      name: "FertiPlus",
      contact: "Marie Martin",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "FP",
      phone: "+33 1 23 45 67 90",
      email: "info@fertiplus.com",
      type: "fertilizers",
      rating: 4,
    },
  ]

  // Function to get badge for supplier type
  const getSupplierTypeBadge = (type: string) => {
    switch (type) {
      case "seeds":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Semences
          </Badge>
        )
      case "fertilizers":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Engrais
          </Badge>
        )
      case "pesticides":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Produits phyto
          </Badge>
        )
      case "equipment":
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
            Équipement
          </Badge>
        )
      default:
        return <Badge variant="outline">Autre</Badge>
    }
  }

  // Function to render rating stars
  const renderRating = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-3 w-3 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contacts récents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentContacts.map((contact) => (
            <div key={contact.id} className="flex items-start space-x-4 p-3 rounded-md border">
              <Avatar className="h-10 w-10">
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback>{contact.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{contact.name}</h4>
                  {getSupplierTypeBadge(contact.type)}
                </div>
                <p className="text-sm text-muted-foreground">{contact.contact}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-3 w-3 mr-1" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-3 w-3 mr-1" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  {renderRating(contact.rating)}
                  <Button variant="ghost" size="sm" className="h-6 px-2">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    <span className="text-xs">Détails</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full text-sm">
            Voir tous les contacts
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

