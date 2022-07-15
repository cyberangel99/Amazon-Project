import { Box, Container, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../Product'

export default function Products() {
  const [products, setProducts] = useState([])
  const url = 'http://localhost:3000/api/products'

  const getProducts = () => {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
          // need to pass a prop to component
        ))}
      </Grid>
    </Container>
  )
}
