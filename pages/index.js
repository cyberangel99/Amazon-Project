import { Box } from '@mui/system'
import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import BackDrop from '../components/layout/BackDrop'
import Products from '../components/layout/Products'

function Home() {
  return (
    <AppLayout>
      <Box
        sx={{
          background:
            'linear-gradient(180deg, rgba(138,215,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%)',
          overflow: 'hidden'
        }}
      >
        <BackDrop />
        <Products />
      </Box>
    </AppLayout>
  )
}

export default Home
