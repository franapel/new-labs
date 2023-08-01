import { styled, useTheme } from '@mui/material/styles'
import { Grid, IconButton, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import CpuFanIcon from '../icons/CpuFan'
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

interface ISidenavHeader {
  open: boolean
  toggleDrawer: () => void
}

const SidenavHeader = ({ open, toggleDrawer }: ISidenavHeader) => {
  const theme = useTheme()
  return (
    <DrawerHeader sx={{ pt: 2, overflowX: 'hidden' }}>
      <Grid
        container
        justifyContent={open ? 'start' : 'center'}
        alignItems="center"
        sx={{ minWidth: open ? 'max-content' : 0 }}
      >
        <Grid item>
          <CpuFanIcon style={{ width: 45 }} />
        </Grid>

        {open && (
          <Grid container alignItems="baseline" sx={{ width: 'fit-content', minWidth: 'max-content', marginRight: 4 }}>
            <Typography variant="h5" sx={{ marginLeft: 2, fontWeight: 600 }}>
              Labs
            </Typography>
            <Typography sx={{ marginLeft: 0.5, color: `${grey[500]} !important` }}>ADMIN</Typography>
          </Grid>
        )}
      </Grid>

      <IconButton
        onClick={toggleDrawer}
        disableRipple
        sx={{
          width: 32,
          height: 32,
          position: 'absolute',
          right: -16,
          color: theme.palette.primary.main,
          backgroundColor: '#FFFFFF',
          boxShadow: '2px 2px 3px 0px rgba(0,0,0,0.1)',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      >
        {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
  )
}

export default SidenavHeader
