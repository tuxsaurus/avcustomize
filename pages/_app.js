import React from 'react'
import { wrapper } from '../store/store'

import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.scss'

import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
