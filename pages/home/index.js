//import Layout from '../../components/layout'
//import Sidebar from '../../components/sidebar'

// import { Box, Heading } from '@chakra-ui/react'

import styles from '../../pages/home/home.module.scss'

export default function Home() {
  return (
    <>
      <h1>I'm a Heading</h1>

      {/* <Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" /> */}

      <img
        src="/av.svg"
        height="24px"
        className={styles.asd}
        width="24px"
        alt="Vercel Logo"
      />
      <section>
        <h1>Hero</h1>
        <button className="btn btn-primary">DaisyUI Button</button>
        <button className="btn btn-primary rounded-full">DaisyUI Button customized</button>
      </section>
      <section>
        <h1>Shop</h1>
      </section>
      <section>
        <h1>Blog</h1>
      </section>
    </>
  )
}

//Home.getLayout = (page) => (
//  <Layout>
//    <Sidebar />
//    {page}
//  </Layout>
//)
