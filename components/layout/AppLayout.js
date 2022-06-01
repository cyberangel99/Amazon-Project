import React from 'react'
import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

export default function AppLayout(props) {
  const { children } = props
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}
