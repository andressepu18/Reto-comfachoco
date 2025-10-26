"use client"

import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { 
  Calendar as CalendarIcon, 
  Users, 
  Filter,
  Download,
  AlertCircle,
  CheckCircle
} from "lucide-react"
import { useState } from "react"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedFilter, setSelectedFilter] = useState("all")

  // Mock data for team absences
  const teamAbsences = [
    {
      id: 1,
      employee: "María García",
      type: "Vacaciones",
      startDate: "2024-01-15",
      endDate: "2024-01-20",
      status: "Aprobado",
      department: "Recursos Humanos"
    },
    {
      id: 2,
      employee: "Juan Rodríguez",
      type: "Licencia Médica",
      startDate: "2024-01-10",
      endDate: "2024-01-15",
      status: "Aprobado",
      department: "Desarrollo"
    },
    {
      id: 3,
      employee: "Ana Martínez",
      type: "Permiso Personal",
      startDate: "2024-01-22",
      endDate: "2024-01-22",
      status: "Pendiente",
      department: "Marketing"
    },
    {
      id: 4,
      employee: "Carlos López",
      type: "Vacaciones",
      startDate: "2024-01-25",
      endDate: "2024-01-30",
      status: "Aprobado",
      department: "Desarrollo"
    }
  ]

  // Mock data for leave types
  const leaveTypes = [
    { id: "vacaciones", name: "Vacaciones", color: "bg-blue-100 text-blue-800" },
    { id: "licencia", name: "Licencia Médica", color: "bg-green-100 text-green-800" },
    { id: "personal", name: "Permiso Personal", color: "bg-yellow-100 text-yellow-800" },
    { id: "cumpleanos", name: "Día de Cumpleaños", color: "bg-purple-100 text-purple-800" }
  ]

  const filteredAbsences = selectedFilter === "all" 
    ? teamAbsences 
    : teamAbsences.filter(absence => 
        absence.type.toLowerCase().includes(selectedFilter.toLowerCase())
      )

  const getLeaveTypeColor = (type: string) => {
    const leaveType = leaveTypes.find(lt => 
      type.toLowerCase().includes(lt.id.toLowerCase())
    )
    return leaveType?.color || "bg-gray-100 text-gray-800"
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendario de Ausencias</h1>
            <p className="text-gray-600">Visualiza y gestiona las ausencias de tu equipo</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Calendario {new Date().getFullYear()}
                </CardTitle>
                <CardDescription>
                  Selecciona una fecha para ver los detalles de ausencias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border w-full"
                />
                
                {/* Legend */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium mb-3">Leyenda</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {leaveTypes.map((type) => (
                      <div key={type.id} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${type.color.split(' ')[0]}`} />
                        <span className="text-xs">{type.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setSelectedFilter("all")}
                >
                  Todos los tipos
                </Button>
                {leaveTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedFilter === type.id ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSelectedFilter(type.id)}
                  >
                    {type.name}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Team Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Estadísticas del Equipo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total ausencias</span>
                  <Badge variant="outline">{teamAbsences.length}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Ausencias hoy</span>
                  <Badge variant="secondary">2</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Por aprobar</span>
                  <Badge variant="destructive">1</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Absences List */}
        <Card>
          <CardHeader>
            <CardTitle>Ausencias Programadas</CardTitle>
            <CardDescription>
              Lista de ausencias del equipo ordenadas por fecha
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredAbsences.map((absence) => (
                <div key={absence.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {absence.status === "Aprobado" ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{absence.employee}</h4>
                      <p className="text-sm text-gray-500">{absence.department}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge className={getLeaveTypeColor(absence.type)}>
                        {absence.type}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">
                        {absence.startDate} - {absence.endDate}
                      </p>
                    </div>
                    
                    <Badge 
                      variant={absence.status === "Aprobado" ? "default" : "secondary"}
                      className={absence.status === "Pendiente" ? "bg-yellow-100 text-yellow-800" : ""}
                    >
                      {absence.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}