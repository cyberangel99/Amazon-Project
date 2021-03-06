import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import echoAmazon from '../../images/echo-1.png'

export default function BackDrop() {
  return (
    <Container disableGutters maxWidth="false">
      <Grid container spacing={2} sx={{ marginTop: '10px', paddingBottom: '50px' }}>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{ marginTop: '15%', textAlign: 'right', flex: 1 }}>
            <span style={{ fontWeight: 'bold', display: 'block', marginRight: '26%' }}>Alexa</span>{' '}
            <span style={{ display: 'block' }}>"What time is it"?</span>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image src={echoAmazon} width={150} height={300} layout="intrinsic" alt="Echo Amazon" />
        </Grid>
      </Grid>
    </Container>
  )
}
