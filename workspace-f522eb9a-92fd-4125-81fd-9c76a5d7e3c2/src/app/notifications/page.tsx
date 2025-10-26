"use client"

import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Bell, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  FileText,
  Calendar,
  Users,
  Filter,
  Trash2,
  Settings
} from "lucide-react"
import { useState } from "react"

export default function NotificationsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  // Mock data for notifications
  const notifications = [
    {
      id: 1,
      title: "Solicitud Aprobada",
      message: "Tu solicitud de vacaciones ha sido aprobada por tu supervisor",
      type: "success",
      timestamp: "2024-01-20 10:30",
      read: false,
      icon: CheckCircle,
      action: {
        text: "Ver detalles",
        href: "/leave-requests/1"
      }
    },
    {
      id: 2,
      title: "Nueva Solicitud Pendiente",
      message: "Ana Martínez ha solicitado un permiso personal para el 22 de enero",
      type: "warning",
      timestamp: "2024-01-19 15:45",
      read: false,
      icon: Clock,
      action: {
        text: "Revisar solicitud",
        href: "/approvals/2"
      }
    },
    {
      id: 3,
      title: "Recordatorio de Vacaciones",
      message: "Tienes 15 días de vacaciones disponibles. ¡Planifica tu tiempo libre!",
      type: "info",
      timestamp: "2024-01-18 09:00",
      read: true,
      icon: Calendar,
      action: {
        text: "Solicitar vacaciones",
        href: "/leave-request"
      }
    },
    {
      id: 4,
      title: "Equipo Ausente",
      message: "Juan Rodríguez estará ausente por licencia médica del 10 al 15 de enero",
      type: "info",
      timestamp: "2024-01-17 14:20",
      read: true,
      icon: Users,
      action: {
        text: "Ver calendario",
        href: "/calendar"
      }
    },
    {
      id: 5,
      title: "Solicitud Rechazada",
      message: "Tu solicitud de permiso personal ha sido rechazada. Motivo: Cobertura insuficiente",
      type: "error",
      timestamp: "2024-01-16 11:15",
      read: true,
      icon: AlertCircle,
      action: {
        text: "Ver detalles",
        href: "/leave-requests/5"
      }
    },
    {
      id: 6,
      title: "Actualización de Políticas",
      message: "Se han actualizado las políticas de permisos. Por favor revisa los cambios.",
      type: "info",
      timestamp: "2024-01-15 16:30",
      read: true,
      icon: FileText,
      action: {
        text: "Ver políticas",
        href: "/settings"
      }
    }
  ]

  const filteredNotifications = selectedFilter === "all" 
    ? notifications 
    : notifications.filter(notification => 
        notification.type === selectedFilter
      )

  const unreadCount = notifications.filter(n => !n.read).length

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "info":
      default:
        return "bg-blue-50 border-blue-200"
    }
  }

  const getNotificationIconColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600"
      case "warning":
        return "text-yellow-600"
      case "error":
        return "text-red-600"
      case "info":
      default:
        return "text-blue-600"
    }
  }

  const markAsRead = (id: number) => {
    // In a real app, this would update the notification status
    console.log(`Marking notification ${id} as read`)
  }

  const markAllAsRead = () => {
    // In a real app, this would mark all notifications as read
    console.log("Marking all notifications as read")
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notificaciones</h1>
              <p className="text-gray-600">Mantente informado sobre las actividades del equipo</p>
            </div>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <Bell className="h-3 w-3" />
                {unreadCount} sin leer
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={markAllAsRead}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Marcar todas como leídas
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Configuración
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("all")}
              >
                Todas ({notifications.length})
              </Button>
              <Button
                variant={selectedFilter === "success" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("success")}
              >
                Aprobadas ({notifications.filter(n => n.type === "success").length})
              </Button>
              <Button
                variant={selectedFilter === "warning" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("warning")}
              >
                Pendientes ({notifications.filter(n => n.type === "warning").length})
              </Button>
              <Button
                variant={selectedFilter === "error" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("error")}
              >
                Rechazadas ({notifications.filter(n => n.type === "error").length})
              </Button>
              <Button
                variant={selectedFilter === "info" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("info")}
              >
                Informativas ({notifications.filter(n => n.type === "info").length})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`transition-all hover:shadow-md ${getNotificationColor(notification.type)} ${!notification.read ? 'border-l-4 border-l-blue-500' : ''}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-2 rounded-full ${getNotificationIconColor(notification.type)}`}>
                      <notification.icon className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{notification.message}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{notification.timestamp}</span>
                        
                        {notification.action && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => console.log(`Navigate to ${notification.action.href}`)}
                          >
                            {notification.action.text}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    {!notification.read && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No hay notificaciones
              </h3>
              <p className="text-gray-500">
                {selectedFilter === "all" 
                  ? "No tienes notificaciones en este momento."
                  : `No hay notificaciones del tipo "${selectedFilter}".`
                }
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}