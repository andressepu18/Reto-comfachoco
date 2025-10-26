"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  Home,
  Bell,
  LogOut
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Solicitar Permiso", href: "/leave-request", icon: FileText },
  { name: "Calendario", href: "/calendar", icon: Calendar },
  { name: "Equipo", href: "/team", icon: Users },
  { name: "Notificaciones", href: "/notifications", icon: Bell },
  { name: "Configuración", href: "/settings", icon: Settings },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="flex items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Comfachocó</h1>
      </div>
      
      <div className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0",
                      isActive ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500"
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      
      <div className="px-3 py-4 border-t border-gray-200">
        <Button variant="ghost" className="w-full justify-start">
          <LogOut className="mr-3 h-5 w-5" />
          Cerrar Sesión
        </Button>
      </div>
    </nav>
  )
}