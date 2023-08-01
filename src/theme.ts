import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1B1C1E'
    },
    secondary: {
      main: '#3661EC'
    },
    warning: {
      main: '#FE4D24'
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(',')
  }
}

const theme = createTheme(themeOptions)

export default responsiveFontSizes(theme)
