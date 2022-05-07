// Default Theme: https://mui.com/material-ui/customization/default-theme/
// Default Colors: https://mui.com/material-ui/customization/color/
import { createTheme } from '@mui/material/styles'
import { deepPurple } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple.A200 // deepPurple['A200']
    }
  }
})

export default theme
