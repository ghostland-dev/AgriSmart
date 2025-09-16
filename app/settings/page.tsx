import { GeneralSettings } from "@/components/general-settings"
import { NotificationSettings } from "@/components/notification-settings"
import { AccountSettings } from "@/components/account-settings"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Paramètres</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GeneralSettings />
        <NotificationSettings />
      </div>
      <AccountSettings />
    </div>
  )
}

