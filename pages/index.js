import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function index() {
  return (
    <AppLayout>
      <Header />
      <AppLayout />
      <Footer />
    </AppLayout>
  )
}

export default index
