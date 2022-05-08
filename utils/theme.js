// Default Theme: https://mui.com/material-ui/customization/default-theme/
// Default Colors: https://mui.com/material-ui/customization/color/
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#131921',
          color: '#FFF'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#febd69'
    }
  }
})

export default theme
