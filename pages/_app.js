import { ThemeProvider } from '@mui/system'
import Head from 'next/head'
import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import theme from '../utils/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
