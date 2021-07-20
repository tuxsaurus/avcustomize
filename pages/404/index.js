// pages/404.js
import { Heading } from '@chakra-ui/react'
import Layout from '../../components/layout'

import styles from './404.module.scss'

export default function Custom404() {
  return (
    <Layout>
      <div title="404" className={styles._404}>
        <Heading>404</Heading>
        <Heading>Página não encontrada!</Heading>
      </div>
    </Layout>
  )
}
