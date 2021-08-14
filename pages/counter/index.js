//
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

// import { Heading } from '@chakra-ui/react'

import { useState } from 'react'

let x = () => {
  console.log('button clicked')
}
const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee', 'Valmor', 'Raquel', 'Ruan']

export default function About() {
  const [results, setResults] = useState()

  return (
    <Layout>
      <section>
        <h1 textAlign="center">Counter</h1>
        <p>gerenciamento de estado</p>a informaçao é guardada na memória caso
        nao tenha nada na memoria, procura no localStorage/indexdDB se encontrar
        valor no localStorage/indexdDB associa esse valor. se não encontrar nada
        entao inicializa a variavel com o valor padrao ou valor passado como
        argumento.
        <button onClick={x} className="btn btn-primary">
          Click
        </button>
      </section>
    </Layout>
  )
}

//About.getLayout = (page) => <Layout>{page}</Layout>

// <Sidebar />
