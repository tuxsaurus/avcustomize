//
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

import { Heading } from '@chakra-ui/react'

export default function About() {
  return (
    <Layout>
      <section>
        <Heading textAlign="center">Sobre Nós</Heading>

        <p>Confecção de roupas e estamparia.</p>
        <p>
          When navigating between pages, we want to persist page state (input
          values, scroll position, etc) for a Single-Page Application (SPA)
          experience.
        </p>
        <p>
          This layout pattern will allow for state persistence because the React
          component tree is persisted between page transitions. To preserve
          state, we need to prevent the React component tree from being
          discarded between page transitions.
        </p>
        <h3>Try It Out</h3>
        <p>
          To visualize this, try tying in the search input in the{' '}
          <code>Sidebar</code> and then changing routes. You'll notice the input
          state is persisted.
        </p>
      </section>
    </Layout>
  )
}

//About.getLayout = (page) => <Layout>{page}</Layout>

// <Sidebar />
