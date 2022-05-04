import React from 'react'
import Header from './Header'
import Footer from './Footer'

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
