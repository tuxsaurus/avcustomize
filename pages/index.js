import Head from "next/head";
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
    <title>Árvore da Vida - Confecção & Estamparia - Camisas Personalizadas</title>
      <meta name="google-site-verification" content="google-site-verification=xlM8hyaZM3KxzbPV7zdlqN_JltzTplOovfx2jUESCe4" />
      <meta name="description" content="Camisas Personalizadas. Serigrafia, estamparia, sublimação. Material gráfico." />
    </Head>
    <Layout>
      <Home />
    </Layout>
    </>
  )
}

//Index.getLayout = (page) => <Layout>{page}</Layout>
// google-site-verification=xlM8hyaZM3KxzbPV7zdlqN_JltzTplOovfx2jUESCe4
