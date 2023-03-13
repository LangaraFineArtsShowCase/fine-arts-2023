import '@/styles/reset/normalize.css'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '@/apollo/client'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Fine Arts 2023</title>
        <meta name="description" content="Fine Arts 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
