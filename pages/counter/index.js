//
import { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { createStore } from 'redux'

import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

// import { Heading } from '@chakra-ui/react'

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee', 'Valmor', 'Raquel', 'Ruan']

export default function Counter() {
  //const counter = 0
  //const [count, setCount] = useState(12)
  const [count, setCount] = useLocalStorageState('counter', 32)
  const [countRx, setCountRx] = useLocalStorageState('counterRx', 13)
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
  //
  let incrementRx = () => {
    console.log('button clicked')
    setCountRx(countRx + 1)
    //counter++
  }
  let decrementRx = () => {
    console.log('button reset')
    setCountRx(countRx - 1)
    //counter++
  }
  let resetRx = () => {
    console.log('button reset')
    setCountRx.reset()
    //counter++
  }
  //

  return (
    <Layout>
      <section>
        <h1 textalign="center">Counter</h1>
        <p>testando useLocalStorageState</p>
        <span className="countdown">
          <span style={{ '--value': 60 }}></span>
        </span>
        <p>
          gerenciamento de estadoa informaçao é guardada na memória caso nao
          tenha nada na memoria, procura no localStorage/indexdDB se encontrar
          valor no localStorage/indexdDB associa esse valor. se não encontrar
          nada entao inicializa a variavel com o valor padrao ou valor passado
          como argumento.
        </p>
        <br></br>
        <h2>use-local-storage-state</h2>
        <button onClick={x} className="btn btn-primary">
          Click
        </button>
        <div className="badge">{count}</div>
        <br></br>
        <div className="shadow stats">
          <div className="stat">
            <div className="stat-title">Total Clicks</div>
            <div className="stat-value">{count}</div>
          </div>
        </div>
        <br></br>
        <button onClick={y} className="btn btn-primary">
          Reset
        </button>
        <hr></hr>
        <h2>Agora com Redux</h2>
        <button onClick={decrementRx} className="btn btn-primary">
          Diminui
        </button>
        <div className="badge">{countRx}</div>
        <button onClick={incrementRx} className="btn btn-secondary">
          Aumenta
        </button>
        <br></br>
        <button onClick={resetRx} className="btn btn-danger">
          Reset
        </button>
      </section>
    </Layout>
  )
}

//About.getLayout = (page) => <Layout>{page}</Layout>

// <Sidebar />
