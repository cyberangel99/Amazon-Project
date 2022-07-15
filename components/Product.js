import { Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import CardContent from '@mui/material/CardContent'

export default function Product({ product }) {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography>{product.name}</Typography>
          <Typography>{product.price}</Typography>
          <Typography>{product.rating}</Typography>
        </CardContent>
        <Container style={{ justifyContent: 'center', display: 'flex' }}>
          <Image src={product.image} width="100%" height="100%" alt="product image" />
        </Container>
      </Card>
    </Grid>
  )
}
