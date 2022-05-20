import { AppBar, Grid, Toolbar, TextField } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import Logo from '../Logo'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <div>
              <Logo />
            </div>
          </Grid>
          <Grid div xs={7}>
            <div>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{ backgroundColor: grey[50] }}
              />
            </div>
          </Grid>
          <Grid div xs={2}>
            <div>sign in</div>
          </Grid>
          <Grid div xs={2}>
            <div>cart</div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
