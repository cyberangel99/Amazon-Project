import React from 'react'
import { Box, Container } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

export default function AppLayout(props) {
  const { children } = props
  return (
    <Box>
      <Header />
      <Container maxWidth={false} sx={{ padding: '24px' }}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
