import React from 'react'
import { wrapper } from '../store/store'

import { Provider } from 'next-auth/client'
import { DefaultSeo } from 'next-seo'

// import { ChakraProvider } from '@chakra-ui/react'

import 'tailwindcss/tailwind.css'
// import 'tailwindcss/tailwind.css'

import '../styles/globals.scss'

//import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </Provider>
  )
}

// function MyAppOld({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//       <ChakraProvider theme={theme}>
//         <Component {...pageProps} />
//       </ChakraProvider>
//     </Provider>
//   )
// }

export default wrapper.withRedux(MyApp)
