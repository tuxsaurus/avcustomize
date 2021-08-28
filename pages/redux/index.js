//
import useLocalStorageState from 'use-local-storage-state'

import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

// import { Heading } from '@chakra-ui/react'

import { useState } from 'react'

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee', 'Valmor', 'Raquel', 'Ruan']

export default function Counter() {
  //const counter = 0
  //const [count, setCount] = useState(12)
  const [count, setCount] = useLocalStorageState('counter', 32)
  //const [results, setResults] = useState()

  let x = () => {
    console.log('button clicked')
    setCount(count + 1)
    //counter++
  }
  let y = () => {
    console.log('button reset')
    setCount.reset()
    //counter++
  }

  return (
    <Layout>
      <section>
        <h1 textalign="center">Counter</h1>
        <p>testando useLocalStorageState</p>
        <span className="countdown">
          <span style={{ '--value': 60 }}></span>
        </span>
        <p>gerenciamento de estado</p>a informaçao é guardada na memória caso
        nao tenha nada na memoria, procura no localStorage/indexdDB se encontrar
        valor no localStorage/indexdDB associa esse valor. se não encontrar nada
        entao inicializa a variavel com o valor padrao ou valor passado como
        argumento.
        <button onClick={x} className="btn btn-primary">
          Click
        </button>
        <div className="badge">{count}</div>
        <div className="shadow stats">
          <div className="stat">
            <div className="stat-title">Total Clicks</div>
            <div className="stat-value">{count}</div>
          </div>
        </div>
        <button onClick={y} className="btn btn-primary">
          Reset
        </button>
      </section>
    </Layout>
  )
}

//About.getLayout = (page) => <Layout>{page}</Layout>

// <Sidebar />
