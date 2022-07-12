import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import BackDrop from '../components/layout/BackDrop'
import Products from '../components/layout/Products'

function Home() {
  return (
    <AppLayout>
      <BackDrop />
      <Products />
    </AppLayout>
  )
}

export default Home
