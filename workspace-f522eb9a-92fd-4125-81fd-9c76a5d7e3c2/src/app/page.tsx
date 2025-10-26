"use client"

import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  FileText, 
  Clock, 
  Users,
  TrendingUp,
  AlertCircle
} from "lucide-react"

export default function Home() {
  // Mock data for demonstration
  const leaveBalance = [
    { type: "Vacaciones", available: 15, used: 5, total: 20 },
    { type: "Permiso Personal", available: 3, used: 2, total: 5 },
    { type: "Licencia Médica", available: 10, used: 0, total: 10 },
  ]

  const recentRequests = [
    { id: 1, type: "Vacaciones", days: 3, status: "Aprobado", date: "2024-01-15" },
    { id: 2, type: "Permiso Personal", days: 1, status: "Pendiente", date: "2024-01-20" },
  ]

  const teamAbsences = [
    { name: "María García", type: "Vacaciones", days: "2-5 Ene" },
    { name: "Juan Rodríguez", type: "Licencia Médica", days: "3-10 Ene" },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Bienvenido a tu portal de autogestión</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Empleado</Badge>
            <span className="text-sm text-gray-500">Carlos López</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Días Disponibles</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">Total de días disponibles</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Solicitudes Pendientes</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Esperando aprobación</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equipo Ausente</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Miembros ausentes hoy</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aprobación Rápida</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">Tasa de aprobación</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Leave Balance */}
          <Card>
            <CardHeader>
              <CardTitle>Saldo de Días Disponibles</CardTitle>
              <CardDescription>Tu balance actual de días de permiso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveBalance.map((balance, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{balance.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        {balance.available} de {balance.total} días
                      </span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(balance.available / balance.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">
                Solicitar Nuevo Permiso
              </Button>
            </CardContent>
          </Card>

          {/* Recent Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Solicitudes Recientes</CardTitle>
              <CardDescription>Tus últimas solicitudes de permiso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{request.type}</p>
                        <p className="text-xs text-gray-500">{request.days} días • {request.date}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={request.status === "Aprobado" ? "default" : "secondary"}
                      className={request.status === "Pendiente" ? "bg-yellow-100 text-yellow-800" : ""}
                    >
                      {request.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Ver Todas las Solicitudes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Team Absences */}
        <Card>
          <CardHeader>
            <CardTitle>Ausencias del Equipo</CardTitle>
            <CardDescription>Miembros de tu equipo actualmente ausentes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamAbsences.map((absence, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{absence.name}</p>
                      <p className="text-xs text-gray-500">{absence.type}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{absence.days}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}