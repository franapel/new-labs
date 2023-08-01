import { useState } from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'

import sidenavOptions from './sidenavOptions'
import SidenavItem from './SidenavItem'
import SidenavHeader from './SidenavHeader'

const drawerWidth = 265

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(12)} + 1px)`
  }
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  '& .MuiPaper-root': { overflow: 'visible !important', backgroundColor: theme.palette.primary.main },
  '& .MuiTypography-root': { color: '#FFFFFF' },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

export default function Sidenav() {
  const [open, setOpen] = useState(false)
  const [openedOption, setOpenedOption] = useState(-1)

  const toggleDrawer = () => {
    if (open) setOpenedOption(-1)
    setOpen(!open)
  }

  const openOption = (index: number) => {
    if (openedOption === index) setOpenedOption(-1)
    else setOpenedOption(index)
  }

  return (
    <Drawer variant="permanent" open={open}>
      <SidenavHeader open={open} toggleDrawer={toggleDrawer} />
      <Divider sx={{ mx: 2, mt: 1, backgroundColor: '#FFFFFF' }} />
      <List sx={{ pt: 10, overflow: 'hidden' }}>
        {sidenavOptions.map((option, index) => (
          <SidenavItem option={option} index={index} open={open} openedOption={openedOption} openOption={openOption} />
        ))}
      </List>
    </Drawer>
  )
}
