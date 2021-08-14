import Head from 'next/head'
import { NextSeo } from 'next-seo'
//import styles from "../styles/Home.module.css";
//import { Configuration, ConfigurationProps } from '@react-md/layout'

import Layout from '../components/layout'
//import Sidebar from '../components/sidebar'
import Home from '../pages/home'

//const overrides = {
// your configuration overrides
//}

export default function Index() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="google-site-verification=xlM8hyaZM3KxzbPV7zdlqN_JltzTplOovfx2jUESCe4"
        />
      </Head>
      <NextSeo
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
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

//Index.getLayout = (page) => <Layout>{page}</Layout>
// google-site-verification=xlM8hyaZM3KxzbPV7zdlqN_JltzTplOovfx2jUESCe4
