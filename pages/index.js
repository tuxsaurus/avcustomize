//import Head from "next/head";
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
    <Layout>
      <Home />
    </Layout>
  )
}

//Index.getLayout = (page) => <Layout>{page}</Layout>
