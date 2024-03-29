import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/theme/defaultTheme'

import { GlobalStyles } from '../styles/global'
import { useApollo } from '@/utils/apollo'

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <Head>
          <title>Won Games</title>

          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />

          <meta
            name="description"
            content="The best Game Store in the world!"
          />
        </Head>

        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
