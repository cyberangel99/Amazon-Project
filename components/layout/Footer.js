import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <AppBar position="relative" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>footer stuff</Toolbar>
    </AppBar>
  )
}
