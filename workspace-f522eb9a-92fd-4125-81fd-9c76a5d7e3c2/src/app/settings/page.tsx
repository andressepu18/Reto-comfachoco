"use client"

import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Building,
  Calendar,
  Save,
  Plus,
  Trash2
} from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  // Profile state
  const [profile, setProfile] = useState({
    name: "Carlos López",
    email: "carlos.lopez@comfachoco.com",
    phone: "+57 300 456 7890",
    position: "Desarrollador Junior",
    department: "Tecnología",
    employeeType: "ADMINISTRATIVE"
  })

  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    requestApproved: true,
    requestRejected: true,
    newTeamRequest: true,
    teamAbsence: true,
    policyUpdates: false
  })

  // Leave policies
  const [leavePolicies, setLeavePolicies] = useState([
    { id: 1, name: "Vacaciones", days: 20, employeeType: "ADMINISTRATIVE" },
    { id: 2, name: "Permiso Personal", days: 5, employeeType: "ADMINISTRATIVE" },
    { id: 3, name: "Licencia Médica", days: 15, employeeType: "ADMINISTRATIVE" },
    { id: 4, name: "Día de Cumpleaños", days: 1, employeeType: "ADMINISTRATIVE" }
  ])

  // Departments
  const [departments, setDepartments] = useState([
    { id: 1, name: "Recursos Humanos", description: "Gestión de talento y cultura" },
    { id: 2, name: "Tecnología", description: "Desarrollo y sistemas" },
    { id: 3, name: "Marketing", description: "Comunicación y ventas" },
    { id: 4, name: "Finanzas", description: "Contabilidad y presupuesto" }
  ])

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating profile:", profile)
  }

  const handleNotificationSettingsUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating notification settings:", notificationSettings)
  }

  const addNewPolicy = () => {
    const newPolicy = {
      id: leavePolicies.length + 1,
      name: "Nuevo Tipo",
      days: 0,
      employeeType: "ADMINISTRATIVE"
    }
    setLeavePolicies([...leavePolicies, newPolicy])
  }

  const updatePolicy = (id: number, field: string, value: any) => {
    setLeavePolicies(policies =>
      policies.map(policy =>
        policy.id === id ? { ...policy, [field]: value } : policy
      )
    )
  }

  const deletePolicy = (id: number) => {
    setLeavePolicies(policies => policies.filter(policy => policy.id !== id))
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
            <p className="text-gray-600">Gestiona tu perfil y preferencias del sistema</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notificaciones
            </TabsTrigger>
            <TabsTrigger value="policies" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Políticas
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Empresa
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Información Personal
                </CardTitle>
                <CardDescription>
                  Actualiza tu información personal y datos de contacto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Cargo</Label>
                      <Input
                        id="position"
                        value={profile.position}
                        onChange={(e) => setProfile({ ...profile, position: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Departamento</Label>
                      <Select value={profile.department} onValueChange={(value) => setProfile({ ...profile, department: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.id} value={dept.name}>
                              {dept.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employeeType">Tipo de Empleado</Label>
                      <Select value={profile.employeeType} onValueChange={(value) => setProfile({ ...profile, employeeType: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ADMINISTRATIVE">Administrativo</SelectItem>
                          <SelectItem value="OPERATIVE">Operativo</SelectItem>
                          <SelectItem value="EXECUTIVE">Directivo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">
                      <Save className="h-4 w-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Preferencias de Notificación
                </CardTitle>
                <CardDescription>
                  Configura cómo y cuándo quieres recibir notificaciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNotificationSettingsUpdate} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificaciones por Email</h4>
                        <p className="text-sm text-gray-500">Recibe notificaciones en tu correo</p>
                      </div>
                      <Switch
                        checked={notificationSettings.emailNotifications}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, emailNotifications: checked })
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificaciones Push</h4>
                        <p className="text-sm text-gray-500">Recibe notificaciones en tiempo real</p>
                      </div>
                      <Switch
                        checked={notificationSettings.pushNotifications}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, pushNotifications: checked })
                        }
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-4">Tipos de Notificaciones</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium">Solicitud Aprobada</h5>
                          <p className="text-sm text-gray-500">Cuando tu solicitud sea aprobada</p>
                        </div>
                        <Switch
                          checked={notificationSettings.requestApproved}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, requestApproved: checked })
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium">Solicitud Rechazada</h5>
                          <p className="text-sm text-gray-500">Cuando tu solicitud sea rechazada</p>
                        </div>
                        <Switch
                          checked={notificationSettings.requestRejected}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, requestRejected: checked })
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium">Nuevas Solicitudes del Equipo</h5>
                          <p className="text-sm text-gray-500">Cuando un miembro solicite permiso</p>
                        </div>
                        <Switch
                          checked={notificationSettings.newTeamRequest}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, newTeamRequest: checked })
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium">Ausencias del Equipo</h5>
                          <p className="text-sm text-gray-500">Cuando un miembro esté ausente</p>
                        </div>
                        <Switch
                          checked={notificationSettings.teamAbsence}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, teamAbsence: checked })
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium">Actualizaciones de Políticas</h5>
                          <p className="text-sm text-gray-500">Cuando las políticas cambien</p>
                        </div>
                        <Switch
                          checked={notificationSettings.policyUpdates}
                          onCheckedChange={(checked) =>
                            setNotificationSettings({ ...notificationSettings, policyUpdates: checked })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">
                      <Save className="h-4 w-4 mr-2" />
                      Guardar Preferencias
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leave Policies */}
          <TabsContent value="policies">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Políticas de Permisos
                </CardTitle>
                <CardDescription>
                  Gestiona los tipos de permisos y días disponibles por tipo de empleado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Políticas Actuales</h4>
                    <Button onClick={addNewPolicy}>
                      <Plus className="h-4 w-4 mr-2" />
                      Agregar Política
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {leavePolicies.map((policy) => (
                      <div key={policy.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label className="text-xs text-gray-500">Nombre</Label>
                            <Input
                              value={policy.name}
                              onChange={(e) => updatePolicy(policy.id, 'name', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label className="text-xs text-gray-500">Días</Label>
                            <Input
                              type="number"
                              value={policy.days}
                              onChange={(e) => updatePolicy(policy.id, 'days', parseInt(e.target.value))}
                            />
                          </div>
                          <div>
                            <Label className="text-xs text-gray-500">Tipo de Empleado</Label>
                            <Select 
                              value={policy.employeeType} 
                              onValueChange={(value) => updatePolicy(policy.id, 'employeeType', value)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ADMINISTRATIVE">Administrativo</SelectItem>
                                <SelectItem value="OPERATIVE">Operativo</SelectItem>
                                <SelectItem value="EXECUTIVE">Directivo</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deletePolicy(policy.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Company Settings */}
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Configuración de la Empresa
                </CardTitle>
                <CardDescription>
                  Gestiona los departamentos y configuración general de la empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-4">Departamentos</h4>
                    <div className="space-y-4">
                      {departments.map((dept) => (
                        <div key={dept.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h5 className="font-medium">{dept.name}</h5>
                            <p className="text-sm text-gray-500">{dept.description}</p>
                          </div>
                          <Badge variant="outline">Activo</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}