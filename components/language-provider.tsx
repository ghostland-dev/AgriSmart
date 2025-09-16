"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "fr" | "ar"

type Translations = {
  [key: string]: {
    fr: string
    ar: string
  }
}

const translations: Translations = {
  dashboard: {
    fr: "Tableau de bord",
    ar: "لوحة المعلومات",
  },
  crops: {
    fr: "Cultures",
    ar: "المحاصيل",
  },
  weather: {
    fr: "Météo",
    ar: "الطقس",
  },
  resources: {
    fr: "Ressources",
    ar: "الموارد",
  },
  analytics: {
    fr: "Analyses",
    ar: "التحليلات",
  },
  tasks: {
    fr: "Tâches",
    ar: "المهام",
  },
  settings: {
    fr: "Paramètres",
    ar: "الإعدادات",
  },
  upcomingTasks: {
    fr: "Tâches à venir",
    ar: "المهام القادمة",
  },
  weatherForecast: {
    fr: "Prévisions météo",
    ar: "توقعات الطقس",
  },
  cropPlanning: {
    fr: "Planification des cultures",
    ar: "تخطيط المحاصيل",
  },
  inventory: {
    fr: "Inventaire",
    ar: "المخزون",
  },
  equipment: {
    fr: "Équipement",
    ar: "المعدات",
  },
  workforce: {
    fr: "Main-d'œuvre",
    ar: "القوى العاملة",
  },
  alerts: {
    fr: "Alertes",
    ar: "التنبيهات",
  },
  today: {
    fr: "Aujourd'hui",
    ar: "اليوم",
  },
  thisWeek: {
    fr: "Cette semaine",
    ar: "هذا الأسبوع",
  },
  thisMonth: {
    fr: "Ce mois",
    ar: "هذا الشهر",
  },
  temperature: {
    fr: "Température",
    ar: "درجة الحرارة",
  },
  humidity: {
    fr: "Humidité",
    ar: "الرطوبة",
  },
  precipitation: {
    fr: "Précipitations",
    ar: "هطول الأمطار",
  },
  wind: {
    fr: "Vent",
    ar: "الرياح",
  },
  soilMoisture: {
    fr: "Humidité du sol",
    ar: "رطوبة التربة",
  },
  addTask: {
    fr: "Ajouter une tâche",
    ar: "إضافة مهمة",
  },
  viewAll: {
    fr: "Voir tout",
    ar: "عرض الكل",
  },
  cropCalendar: {
    fr: "Calendrier des cultures",
    ar: "تقويم المحاصيل",
  },
  plantingDate: {
    fr: "Date de plantation",
    ar: "تاريخ الزراعة",
  },
  harvestDate: {
    fr: "Date de récolte",
    ar: "تاريخ الحصاد",
  },
  cropType: {
    fr: "Type de culture",
    ar: "نوع المحصول",
  },
  field: {
    fr: "Parcelle",
    ar: "الحقل",
  },
  status: {
    fr: "Statut",
    ar: "الحالة",
  },
  actions: {
    fr: "Actions",
    ar: "الإجراءات",
  },
  switchLanguage: {
    fr: "العربية",
    ar: "Français",
  },
  darkMode: {
    fr: "Mode sombre",
    ar: "الوضع المظلم",
  },
  lightMode: {
    fr: "Mode clair",
    ar: "الوضع المضيء",
  },
  systemMode: {
    fr: "Mode système",
    ar: "وضع النظام",
  },
  profile: {
    fr: "Profil",
    ar: "الملف الشخصي",
  },
  logout: {
    fr: "Déconnexion",
    ar: "تسجيل الخروج",
  },
  totalCrops: {
    fr: "Total des cultures",
    ar: "إجمالي المحاصيل",
  },
  activeTasks: {
    fr: "Tâches actives",
    ar: "المهام النشطة",
  },
  equipmentStatus: {
    fr: "État de l'équipement",
    ar: "حالة المعدات",
  },
  weatherAlerts: {
    fr: "Alertes météo",
    ar: "تنبيهات الطقس",
  },
  active: {
    fr: "actives",
    ar: "نشطة",
  },
  maintenance: {
    fr: "en maintenance",
    ar: "في الصيانة",
  },
  expected: {
    fr: "attendues",
    ar: "متوقعة",
  },
  rainfall: {
    fr: "Précipitations",
    ar: "هطول الأمطار",
  },
  reports: {
    fr: "Rapports",
    ar: "التقارير",
  },
  suppliers: {
    fr: "Fournisseurs",
    ar: "الموردين",
  },
  traceability: {
    fr: "Traçabilité",
    ar: "التتبع",
  },
  "ai-advisor": {
    fr: "Conseiller IA",
    ar: "مستشار الذكاء الاصطناعي",
  },
  weeklyForecast: {
    fr: "Prévisions hebdomadaires",
    ar: "توقعات أسبوعية",
  },
  monthlyForecast: {
    fr: "Prévisions mensuelles",
    ar: "توقعات شهرية",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: () => "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "ar")) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.error("Failed to get language from localStorage:", error)
    }

    // Set document direction based on language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language]
    }
    return key
  }

  const dir = (): "ltr" | "rtl" => {
    return language === "ar" ? "rtl" : "ltr"
  }

  const value = {
    language,
    setLanguage: (lang: Language) => {
      setLanguage(lang)
      try {
        localStorage.setItem("language", lang)
      } catch (error) {
        console.error("Failed to save language to localStorage:", error)
      }
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    },
    t,
    dir,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}

