import { useState } from 'react'
import Sidebar from './components/sidebar/Sidenav'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  )
}

export default App
