import BrightnessIcon from '@mui/icons-material/Brightness6'
import CalendarIcon from '@mui/icons-material/Today'
import KeyIcon from '@mui/icons-material/Key'
import MonitorIcon from '@mui/icons-material/MonitorHeart'
import AdminPanelIcon from '@mui/icons-material/AdminPanelSettings'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

export interface ISidenavOption {
  name: string
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
  subOptions: {
    name: string
    path: string
  }[]
}

const sidenavOptions: ISidenavOption[] = [
  {
    name: 'Actividad',
    icon: BrightnessIcon,
    subOptions: [
      {
        name: 'Histórico',
        path: '/activity-history'
      },
      {
        name: 'Estado',
        path: '/activity-state'
      }
    ]
  },
  {
    name: 'Calendario',
    icon: CalendarIcon,
    subOptions: [
      {
        name: 'Horarios',
        path: '/calendar-schedules'
      },
      {
        name: 'Solicitudes',
        path: '/calendar-requests'
      },
      {
        name: 'Administrar',
        path: '/calendar-administrate'
      }
    ]
  },
  {
    name: 'Lincencias',
    icon: KeyIcon,
    subOptions: [
      {
        name: 'Formularios',
        path: '/licenses-form'
      },
      {
        name: 'Administrar',
        path: '/licenses-administrate'
      },
      {
        name: 'Reportes',
        path: '/licenses-reports'
      }
    ]
  },
  {
    name: 'Monitoreo',
    icon: MonitorIcon,
    subOptions: [
      {
        name: 'Incidencias',
        path: '/monitoring-incidences'
      },
      {
        name: 'Revisiones',
        path: '/monitoring-exams'
      },
      {
        name: 'Reportes',
        path: '/monitoring-reports'
      }
    ]
  },
  {
    name: 'Panel de Administración',
    icon: AdminPanelIcon,
    subOptions: [
      {
        name: 'Usuarios',
        path: '/admin-panel-users'
      },
      {
        name: 'Campus',
        path: '/admin-panel-users'
      }
    ]
  }
]

export default sidenavOptions
