import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import Head from 'next/head'
import React from 'react'
import theme from '../utils/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
