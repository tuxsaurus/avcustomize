import React from 'react'
import { wrapper } from '../store/store'

import { Provider } from 'next-auth/client'
import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'

// import { ChakraProvider } from '@chakra-ui/react'

import 'tailwindcss/tailwind.css'
// import 'tailwindcss/tailwind.css'

import '../styles/globals.scss'

//import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <DefaultSeo
        title="Árvore da Vida - Confecção & Estamparia - Camisas Personalizadas"
        description="Camisas Personalizadas. Serigrafia, estamparia, sublimação. Material gráfico."
        canonical="https://www.avcustomize.com.br/"
        openGraph={{
          url: 'https://www.avcustomize.com.br/',
          title: 'Produtos e serviços de customização',
          description: 'Produtos e serviços de customização',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
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

export default appWithTranslation(wrapper.withRedux(MyApp))
