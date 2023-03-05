import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/theme/defaultTheme'

import { GlobalStyles } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>Won Games</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <meta name="description" content="The best Game Store in the world!" />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
