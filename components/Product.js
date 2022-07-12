import { Card, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import CardContent from '@mui/material/CardContent'

export default function Product({ product }) {
  return (
    <Grid item xs={4}>
      <Card>
        {product.name}
        <CardContent>
          {product.price}
          {product.rating}
          <Image src={product.image} width="100%" height="100%" alt="product image" />
        </CardContent>
      </Card>
    </Grid>
  )
}
