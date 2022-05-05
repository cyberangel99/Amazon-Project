import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '@fontsource/roboto/400.css'

export default function AppLayout(props) {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
