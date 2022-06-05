import { Grid } from '@mui/material'
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
        console.log(response)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <Grid container spacing={2}>
      <Product />
    </Grid>
  )
}
