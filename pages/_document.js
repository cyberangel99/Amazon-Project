import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function _document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  )
}
