"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Building, Save, X } from "lucide-react"
import { useTranslation } from "./language-provider"

export function SupplierForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    contactName: "",
    phone: "",
    email: "",
    address: "",
    website: "",
    notes: "",
    isActive: true,
  })

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData)
    // Reset form or show success message
    alert("Fournisseur ajouté avec succès!")
    setFormData({
      name: "",
      type: "",
      contactName: "",
      phone: "",
      email: "",
      address: "",
      website: "",
      notes: "",
      isActive: true,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Building className="h-5 w-5 mr-2" />
          Ajouter un fournisseur
        </CardTitle>
        <CardDescription>Ajoutez un nouveau fournisseur à votre liste de contacts</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom de l'entreprise</Label>
            <Input
              id="name"
              placeholder="Ex: AgriSeed"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Type de fournisseur</Label>
            <Select value={formData.type} onValueChange={(value) => handleChange("type", value)} required>
              <SelectTrigger id="type">
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seeds">Semences</SelectItem>
                <SelectItem value="fertilizers">Engrais</SelectItem>
                <SelectItem value="pesticides">Produits phytosanitaires</SelectItem>
                <SelectItem value="equipment">Équipement</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactName">Nom du contact</Label>
              <Input
                id="contactName"
                placeholder="Ex: Jean Dupont"
                value={formData.contactName}
                onChange={(e) => handleChange("contactName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                placeholder="Ex: +33 1 23 45 67 89"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Ex: contact@agriseed.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adresse</Label>
            <Input
              id="address"
              placeholder="Ex: 123 Rue des Semences, 75001 Paris"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Site web</Label>
            <Input
              id="website"
              placeholder="Ex: https://www.agriseed.com"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Informations supplémentaires..."
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              className="min-h-[80px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => handleChange("isActive", checked)}
            />
            <Label htmlFor="isActive">Fournisseur actif</Label>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <Button
              variant="outline"
              type="button"
              onClick={() =>
                setFormData({
                  name: "",
                  type: "",
                  contactName: "",
                  phone: "",
                  email: "",
                  address: "",
                  website: "",
                  notes: "",
                  isActive: true,
                })
              }
            >
              <X className="h-4 w-4 mr-2" />
              Annuler
            </Button>
            <Button type="submit">
              <Save className="h-4 w-4 mr-2" />
              Enregistrer
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

