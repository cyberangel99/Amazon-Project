import { AppBar, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import amazonLogo from '../../images/amazon-logo.png'

export default function Footer() {
  return (
    <AppBar position="relative" sx={{ top: 'auto', bottom: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography>Get to Know Us</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Make Money with Us</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Amazon Payment Products</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Let Us Help You</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ width: '100px' }}>
        <Grid item xs={12}>
          <Image src={amazonLogo} layout="responsive" alt="Amazon Logo" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            Condition of Use Privacy Notice 1996-2022, Amazon.com or its affiliates
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}
