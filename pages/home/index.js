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
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5rem"
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
      <section>
        <h1>Hero</h1>
        <button className="btn btn-primary">DaisyUI Button</button>
        <button className="btn btn-primary rounded-full">
          DaisyUI Button customized
        </button>
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
