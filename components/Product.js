import { Card, Container, Grid, Rating, Typography, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import CardContent from '@mui/material/CardContent'

export default function Product({ product }) {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography>{product.name}</Typography>
          <Typography>${product.price}</Typography>
          <Typography>
            <Rating value={product.rating} precision={0.5} max={5} />
          </Typography>
        </CardContent>
        <Container style={{ justifyContent: 'center', display: 'flex', paddingBottom: '20px' }}>
          <Image src={product.image} width="100%" height="100%" alt="product image" />
        </Container>
        <Container style={{ justifyContent: 'center', display: 'flex', paddingBottom: '20px' }}>
          <Button variant="contained">Add to Cart</Button>
        </Container>
      </Card>
    </Grid>
  )
}
