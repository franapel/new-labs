import { Fragment as ReactFragment } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Divider, Grid, List, ListItem, Typography } from '@mui/material'
import { ISidenavOption } from './sidenavOptions'

interface ISidenavItem {
  option: ISidenavOption
  index: number
  open: boolean
  openedOption: number
  openOption: (index: number) => void
}

const SideNavItem = ({ option, index, open, openedOption, openOption }: ISidenavItem) => {
  return (
    <ReactFragment key={option.name}>
      <ListItem key={option.name} disablePadding sx={{ minWidth: open ? 'max-content' : 0, mt: 4, display: 'block' }}>
        <Accordion
          expanded={openedOption === index}
          elevation={0}
          square
          sx={{ '&:hover': { backgroundColor: 'red' } }}
        >
          <AccordionSummary onClick={() => openOption(index)}>
            <Grid container alignItems="center" justifyContent={open ? 'start' : 'center'} gap={2}>
              <option.icon fontSize="large" sx={{ color: '#FFFFFF' }} />
              {open && <Typography variant="body2">{option.name}</Typography>}
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {option.subOptions.map((subOption) => (
                <Typography key={subOption.name}>{subOption.name}</Typography>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </ListItem>
      <Divider sx={{ mx: 2, backgroundColor: '#FFFFFF' }} />
    </ReactFragment>
  )
}

export default SideNavItem
