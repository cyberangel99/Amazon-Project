import { AppBar, Grid, Toolbar } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div>logo</div>
          </Grid>
          <Grid div xs={6}>
            <div>search</div>
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
