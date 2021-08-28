// pages/search/index.js
//
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

// import { Heading } from '@chakra-ui/react'

import { useState } from 'react'

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee', 'Valmor', 'Raquel', 'Ruan']

export default function Search() {
  const [results, setResults] = useState()

  return (
    <Layout>
      <section>
        <h1 textAlign="center">Search</h1>
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={async (e) => {
              const { value } = e.currentTarget
              // Dynamically load fuse.js
              const Fuse = (await import('fuse.js')).default
              const fuse = new Fuse(names)

              setResults(fuse.search(value))
            }}
          />
          <pre>Results: {JSON.stringify(results, null, 2)}</pre>
        </div>
      </section>
    </Layout>
  )
}

//About.getLayout = (page) => <Layout>{page}</Layout>

// <Sidebar />
