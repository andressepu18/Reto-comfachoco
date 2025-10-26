"use client"

import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar as CalendarIcon, 
  FileText, 
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { useState } from "react"

export default function LeaveRequestPage() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [leaveType, setLeaveType] = useState("")
  const [reason, setReason] = useState("")

  // Mock data
  const leaveTypes = [
    { id: "1", name: "Vacaciones", daysAvailable: 15 },
    { id: "2", name: "Permiso Personal", daysAvailable: 3 },
    { id: "3", name: "Licencia Médica", daysAvailable: 10 },
    { id: "4", name: "Día de Cumpleaños", daysAvailable: 1 },
  ]

  const calculateDays = () => {
    if (!startDate || !endDate) return 0
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
    return diffDays
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ startDate, endDate, leaveType, reason, days: calculateDays() })
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Solicitar Permiso</h1>
            <p className="text-gray-600">Gestiona tus vacaciones y permisos de forma rápida y sencilla</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Nueva Solicitud de Permiso
                </CardTitle>
                <CardDescription>
                  Completa el formulario para solicitar tu permiso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Leave Type */}
                  <div className="space-y-2">
                    <Label htmlFor="leave-type">Tipo de Permiso</Label>
                    <Select value={leaveType} onValueChange={setLeaveType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de permiso" />
                      </SelectTrigger>
                      <SelectContent>
                        {leaveTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name} ({type.daysAvailable} días disponibles)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Range */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Fecha de Inicio</Label>
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        className="rounded-md border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Fecha de Fin</Label>
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        className="rounded-md border"
                      />
                    </div>
                  </div>

                  {/* Days Calculation */}
                  {startDate && endDate && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-blue-900">
                          Total de días solicitados: {calculateDays()}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Reason */}
                  <div className="space-y-2">
                    <Label htmlFor="reason">Motivo (Opcional)</Label>
                    <Textarea
                      id="reason"
                      placeholder="Describe el motivo de tu solicitud..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1">
                      Enviar Solicitud
                    </Button>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leave Balance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tu Saldo Actual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaveTypes.map((type) => (
                  <div key={type.id} className="flex items-center justify-between">
                    <span className="text-sm">{type.name}</span>
                    <Badge variant="outline">{type.daysAvailable} días</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Información Importante
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Solicita tu permiso con al menos 48 horas de anticipación</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Recibirás una notificación cuando tu solicitud sea aprobada</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Puedes cancelar tu solicitud hasta 24 horas antes</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Solicitudes Recientes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Vacaciones</p>
                    <p className="text-xs text-gray-500">15-20 Ene 2024</p>
                  </div>
                  <Badge variant="default">Aprobado</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Permiso Personal</p>
                    <p className="text-xs text-gray-500">5 Ene 2024</p>
                  </div>
                  <Badge variant="secondary">Pendiente</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}