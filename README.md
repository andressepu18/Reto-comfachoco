🏢 Comfachocó - Sistema de Autogestión del Empleado

Una aplicación web moderna para la gestión de vacaciones, permisos y licencias, desarrollada como solución al reto tecnológico de Comfachocó Quibdó.

🎯 Descripción del Proyecto

Este proyecto es una solución digital innovadora que permite a los empleados gestionar sus vacaciones, permisos y licencias de manera fácil, rápida y transparente, reduciendo la carga administrativa de Recursos Humanos y mejorando la comunicación dentro de los equipos.

🚀 Características Principales

- Portal del Empleado: Solicitar vacaciones, permisos o licencias desde un portal web disponible 24/7
- Cálculo Automático: Consultar en tiempo real el saldo de días disponibles, usados y acumulados
- Flujo de Aprobación: Activar flujos automáticos de aprobación, notificando a supervisores y RRHH sin papeleo
- Calendario Compartido: Visualizar en un calendario compartido la disponibilidad del equipo, evitando solapamientos
- Centralización: Guardar toda la información de permisos y ausencias en un solo lugar seguro y accesible
- Personalización: Personalizar las políticas según el tipo de empleado (administrativo, operativo, directivo, etc.)

✨ Tecnología Utilizada

🎯 Framework Principal
- ⚡ Next.js 15 - Framework de React para producción con App Router
- 📘 TypeScript 5 - JavaScript con tipos para mejor experiencia de desarrollo
- 🎨 Tailwind CSS 4 - Framework de CSS utility-first para desarrollo rápido de UI

🧩 Componentes y Estilos
- 🧩 shadcn/ui - Componentes de alta calidad y accesibles
- 🎯 Lucide React - Biblioteca de iconos consistente y hermosa
- 📅 Componentes de Calendario - Para gestión de fechas y visualización

🗄️ Base de Datos y Backend
- 🗄️ Prisma - ORM de última generación para Node.js y TypeScript
- 💾 SQLite - Base de datos ligera y rápida para desarrollo
- 🔌 Socket.io - Comunicación en tiempo real para notificaciones

🎨 Características Avanzadas de UI
- 📊 Dashboard Interactivo - Métricas y visualizaciones en tiempo real
- 📋 Formularios Inteligentes - Validación y cálculos automáticos
- 🌙 Modo Oscuro/Claro - Soporte para temas personalizados
- 📱 Diseño Responsivo - Mobile-first con adaptación a todos los dispositivos

🏗️ Arquitectura del Sistema

📊 Modelo de Datos
- User: Usuarios del sistema (empleados, supervisores, RRHH)
- LeaveType: Tipos de permisos (vacaciones, licencias, etc.)
- LeaveRequest: Solicitudes de permisos
- LeaveBalance: Saldo de días disponibles por empleado
- LeavePolicy: Políticas de permisos por tipo de empleado
- Department: Departamentos de la empresa
- Notification: Notificaciones del sistema

🔄 Flujo de Trabajo
1. Solicitud: El empleado crea una solicitud de permiso
2. Validación: El sistema valida días disponibles y políticas
3. Notificación: Se notifica al supervisor correspondiente
4. Aprobación: El supervisor aprueba o rechaza la solicitud
5. Actualización: Se actualiza el saldo de días y se notifica al empleado
6. Registro: Toda la información queda centralizada para auditoría

🚀 Instalación y Ejecución

Prerrequisitos
- Node.js 18 o superior
- npm o yarn

Configuración
```bash
Clonar el repositorio
git clone <repositorio>
cd comfachoco-employee-management

Instalar dependencias
npm install

Configurar variables de entorno
cp .env.example .env

Iniciar base de datos
npm run db:push

Iniciar servidor de desarrollo
npm run dev
```

Variables de Entorno
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

📁 Estructura del Proyecto

```
src/
├── app/                    # Páginas de Next.js App Router
│   ├── page.tsx           # Dashboard principal
│   ├── leave-request/     # Solicitud de permisos
│   ├── calendar/          # Calendario de ausencias
│   ├── team/             # Gestión del equipo
│   ├── notifications/    # Centro de notificaciones
│   └── settings/         # Configuración
├── components/            # Componentes reutilizables
│   ├── ui/              # Componentes shadcn/ui
│   ├── navigation.tsx    # Navegación principal
│   └── main-layout.tsx  # Layout principal
├── hooks/                # Hooks personalizados
└── lib/                  # Utilidades y configuraciones
    ├── db.ts            # Cliente de base de datos
    ├── socket.ts        # Configuración de Socket.io
    └── utils.ts         # Funciones utilitarias
```

🎯 Funcionalidades Implementadas

✅ Nivel 1 - Propuesta Visual y Maqueta
- [x] Diseño de interfaz intuitiva y moderna
- [x] Prototipo funcional del sistema
- [x] Demostración de flujo de usuario

✅ Nivel 2 - Desarrollo Inicial (MVP)
- [x] Portal del empleado para solicitar vacaciones/permisos
- [x] Sistema de flujo de aprobación con notificaciones
- [x] Cálculo automático de días disponibles
- [x] Visualización de solicitudes y estados

✅ Nivel 3 - Implementación Inteligente
- [x] Calendario compartido para evitar solapamientos
- [x] Panel de control con métricas y reportes
- [x] Personalización de políticas por tipo de empleado
- [x] Centralización de información y auditoría

🎨 Componentes Disponibles

🧩 Componentes de UI (shadcn/ui)
- Layout: Card, Separator, Aspect Ratio
- Formularios: Input, Textarea, Select, Calendar
- Feedback: Alert, Badge, Progress
- Navegación: Breadcrumb, Navigation Menu
- Overlay: Dialog, Sheet, Popover, Tooltip

📊 Características de Datos
- Dashboard: Métricas en tiempo real y estadísticas
- Calendario: Visualización de ausencias del equipo
- Formularios: Validación y cálculos automáticos
- Notificaciones: Sistema de notificaciones en tiempo real

🔄 Flujo de Aprobación

1. Empleado crea solicitud de permiso
   - Selecciona tipo de permiso
   - Elige fechas
   - Agrega motivo (opcional)
   - Envía solicitud

2. Sistema valida automáticamente
   - Verifica días disponibles
   - Aplica políticas correspondientes
   - Calcula días solicitados

3. Supervisor recibe notificación
   - Revisa detalles de la solicitud
   - Aprueba o rechaza
   - Agrega comentarios

4. Empleado recibe respuesta
   - Notificación de aprobación/rechazo
   - Actualización de saldo de días
   - Registro en historial

📊 Reportes y Métricas

Para Empleados
- Saldo de días disponibles
- Historial de solicitudes
- Estado de solicitudes pendientes
- Ausencias del equipo

Para Supervisores
- Solicitudes pendientes de aprobación
- Estadísticas de ausencias del equipo
- Calendario de disponibilidad
- Reportes de productividad

Para RRHH
- Reportes generales de ausencias
- Análisis de tendencias
- Gestión de políticas
- Auditoría de solicitudes

🌟 Mejores Prácticas

🎨 Diseño y UX
- Mobile-First: Diseño optimizado para dispositivos móviles
- Accesibilidad: Componentes accesibles con ARIA labels
- Consistencia: Sistema de diseño unificado
- Rendimiento: Optimización de carga y respuestas

🔧 Desarrollo
- Type Safety: Tipado estricto con TypeScript
- Componentes Reutilizables: Arquitectura basada en componentes
- Estado Global: Gestión de estado con Zustand
- API Restful: Endpoints bien estructurados

🗄️ Base de Datos
- Relaciones Claras: Modelo de datos bien definido
- Validaciones: Reglas de negocio a nivel de base de datos
- Escalabilidad: Diseño preparado para crecimiento
- Seguridad: Datos sensibles protegidos

🚀 Despliegue

Desarrollo
```bash
npm run dev
```

Producción
```bash
npm run build
npm start
```

Docker
```bash
docker build -t comfachoco-app .
docker run -p 3000:3000 comfachoco-app
```

🤝 Contribución

1. Fork del repositorio
2. Crear rama de característica (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

📄 Licencia

Este proyecto está licenciado bajo la MIT License - ver el archivo [LICENSE](LICENSE) para detalles.

🏢 Sobre Comfachocó

Comfachocó es la Caja de Compensación Familiar de Chocó, comprometida con el bienestar y desarrollo de las familias chocoanas. Este reto tecnológico busca impulsar la autogestión y la eficiencia en las empresas de la región, promoviendo el uso de la tecnología para fortalecer el bienestar laboral y la productividad.

Desarrollado con ❤️ para la comunidad de Comfachocó. Construido como solución al reto tecnológico de autogestión del empleado.
