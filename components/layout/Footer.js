import { AppBar, Grid, Typography, Container } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import amazonLogo from '../../images/amazon-logo.png'

export default function Footer() {
  return (
    <AppBar position="relative" sx={{ top: 'auto', bottom: 0 }}>
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h6">Get to Know Us</Typography>
          <Typography>Amazon Careers</Typography>
          <Typography>Amazon Newsletter</Typography>
          <Typography>About Amazon</Typography>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h6">Make Money with Us</Typography>
          <Typography>Sell on Amazon</Typography>
          <Typography>Sell apps on Amazon</Typography>
          <Typography>Supply to Amazon</Typography>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h6">Amazon Payment Products</Typography>
          <Typography>Amazon Visa Rewards card</Typography>
          <Typography>Amazon Store card</Typography>
          <Typography>Amazon Business card</Typography>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h6">Let Us Help You</Typography>
          <Typography>Your Account</Typography>
          <Typography>Your Orders</Typography>
          <Typography>Shipping Rate and Polices</Typography>
        </Grid>
      </Grid>
      <Container style={{ justifyContent: 'center', width: '150px', marginTop: '20px' }}>
        <Image src={amazonLogo} layout="responsive" alt="Amazon Logo" />
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '10px' }}>
          <Typography>
            Condition of Use Privacy Notice 1996-2022, Amazon.com or its affiliates
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}
