import { Card, Grid } from '@mui/material'
import React from 'react'

export default function Product({ product }) {
  return (
    <Grid item xs={4}>
      <Card>{product.name}</Card>
    </Grid>
  )
}
