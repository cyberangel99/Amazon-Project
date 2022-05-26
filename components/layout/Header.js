import { AppBar, Grid, Toolbar, TextField, Box, Button } from '@mui/material'
import { grey } from '@mui/material/colors'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import Logo from '../Logo'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Box sx={{ paddingTop: '10px' }}>
              <Logo />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box sx={{ paddingTop: '5px' }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{
                  backgroundColor: grey[50],
                  width: '93%',
                  borderRadius: '10px'
                }}
                size="small"
              />
              <Button variant="contained">
                <SearchIcon fontSize="medium" />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <div>
              Hello, sign in <span style={{ fontWeight: 'bold' }}>Account</span>
            </div>
          </Grid>
          <Grid item xs={1}>
            <Box sx={{ paddingTop: '5px' }}>
              <AddShoppingCartIcon fontSize="large" />
              <span style={{ fontWeight: 'bold' }}>Cart</span>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
