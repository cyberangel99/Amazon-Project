import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import CardContent from '@mui/material/CardContent'

export default function Product({ product }) {
  return (
    <Grid item xs={4} align="center">
      <Card>
        {product.name}
        <CardContent>
          <Typography>{product.price}</Typography>
          <Typography>{product.rating}</Typography>
        </CardContent>
        <Image src={product.image} width="100%" height="100%" alt="product image" />
      </Card>
    </Grid>
  )
}
