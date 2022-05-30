import { Container, Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import echoAmazon from '../../images/echo-1.png'

export default function BackDrop() {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{
        background: 'linear-gradient(#8c8cff, #ffffff)',
        p: 0
      }}
    >
      <Box>
        <Image src={echoAmazon} alt="echo" />
      </Box>
    </Container>
  )
}
