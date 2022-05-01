import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

export default function AppLayout(props) {
  const { children } = props
  return (
    <div>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
