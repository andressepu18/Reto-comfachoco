"use client"

import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Users, 
  Search, 
  Mail, 
  Phone,
  Calendar,
  AlertCircle,
  CheckCircle,
  MoreHorizontal
} from "lucide-react"
import { useState } from "react"

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for team members
  const teamMembers = [
    {
      id: 1,
      name: "María García",
      email: "maria.garcia@comfachoco.com",
      phone: "+57 300 123 4567",
      position: "Coordinadora de RRHH",
      department: "Recursos Humanos",
      status: "active",
      currentStatus: "Disponible",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 2,
      name: "Juan Rodríguez",
      email: "juan.rodriguez@comfachoco.com",
      phone: "+57 300 234 5678",
      position: "Desarrollador Senior",
      department: "Tecnología",
      status: "absent",
      currentStatus: "Licencia Médica",
      avatar: "/placeholder-avatar.jpg",
      absenceInfo: {
        type: "Licencia Médica",
        startDate: "2024-01-10",
        endDate: "2024-01-15",
        daysRemaining: 3
      }
    },
    {
      id: 3,
      name: "Ana Martínez",
      email: "ana.martinez@comfachoco.com",
      phone: "+57 300 345 6789",
      position: "Especialista en Marketing",
      department: "Marketing",
      status: "active",
      currentStatus: "Disponible",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 4,
      name: "Carlos López",
      email: "carlos.lopez@comfachoco.com",
      phone: "+57 300 456 7890",
      position: "Desarrollador Junior",
      department: "Tecnología",
      status: "vacation",
      currentStatus: "Vacaciones",
      avatar: "/placeholder-avatar.jpg",
      absenceInfo: {
        type: "Vacaciones",
        startDate: "2024-01-25",
        endDate: "2024-01-30",
        daysRemaining: 8
      }
    },
    {
      id: 5,
      name: "Laura Sánchez",
      email: "laura.sanchez@comfachoco.com",
      phone: "+57 300 567 8901",
      position: "Contadora",
      department: "Finanzas",
      status: "active",
      currentStatus: "Disponible",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 6,
      name: "Pedro Ramírez",
      email: "pedro.ramirez@comfachoco.com",
      phone: "+57 300 678 9012",
      position: "Analista de Sistemas",
      department: "Tecnología",
      status: "active",
      currentStatus: "Disponible",
      avatar: "/placeholder-avatar.jpg"
    }
  ]

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "absent":
        return "bg-red-100 text-red-800"
      case "vacation":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />
      case "absent":
      case "vacation":
        return <AlertCircle className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Equipo</h1>
            <p className="text-gray-600">Gestiona y visualiza la información de tu equipo</p>
          </div>
          <Button>
            <Users className="h-4 w-4 mr-2" />
            Invitar Miembro
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Miembros</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.length}</div>
              <p className="text-xs text-muted-foreground">Miembros activos</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Disponibles</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {teamMembers.filter(m => m.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">Disponibles hoy</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ausentes</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {teamMembers.filter(m => m.status === "absent").length}
              </div>
              <p className="text-xs text-muted-foreground">Licencias médicas</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vacaciones</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {teamMembers.filter(m => m.status === "vacation").length}
              </div>
              <p className="text-xs text-muted-foreground">De vacaciones</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Buscar Miembros</CardTitle>
            <CardDescription>
              Encuentra miembros del equipo por nombre, posición o departamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar por nombre, posición o departamento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Team Members List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{member.name}</h4>
                      <p className="text-sm text-gray-500">{member.position}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Status */}
                <div className="flex items-center gap-2">
                  {getStatusIcon(member.status)}
                  <Badge className={getStatusColor(member.status)}>
                    {member.currentStatus}
                  </Badge>
                </div>

                {/* Absence Info */}
                {member.absenceInfo && (
                  <div className="bg-gray-50 p-3 rounded-lg text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{member.absenceInfo.type}</span>
                      <span className="text-gray-500">
                        {member.absenceInfo.daysRemaining} días restantes
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {member.absenceInfo.startDate} - {member.absenceInfo.endDate}
                    </p>
                  </div>
                )}

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                {/* Department */}
                <div className="pt-2 border-t">
                  <Badge variant="outline">{member.department}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}