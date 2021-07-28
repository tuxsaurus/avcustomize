//
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

import { Heading } from '@chakra-ui/react'

import { useState } from 'react'

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee', 'Valmor', 'Raquel', 'Ruan']

export default function About() {
  const [results, setResults] = useState()

  return (
    <Layout>
      <section>
        <Heading textAlign="center">Sobre Nós</Heading>

        <p>
          Na Árvore da Vida desenvolvemos e produzimos diversos produtos com
          soluções personalizadas de customização.
        </p>
        <p></p>
        <p></p>
        <br></br>
        <ul>
          <li>Confecção de Vestimentas</li>
          <li>Estamparia</li>
          <li>Arte Gráfica</li>
          <li>Impressão Digital</li>
        </ul>
        <br></br>
        <ul>
          <li>Gráfica</li>
          <li>Estamparia</li>
          <li>Arte Gráfica</li>
          <li>Impressão Digital</li>
        </ul>
        <br></br>

        <ul>
          <li>
            <strong>Vestimentas</strong>
          </li>
          <ul>
            <li>Camisetas para Eventos</li>
            <li>Camisetas para Igrejas </li>
            <li>Camisetas Personalizadas </li>
            <li>Camisetas Lisas</li>
            <li>Uniformes Empresariais </li>
            <li>Uniformes Esportivos </li>
          </ul>
        </ul>
        <br></br>
        <ul>
          <li>
            <strong>Gráfica</strong>
          </li>
          <ul>
            <li>Adesivos</li>
            <li>Cartões</li>
            <li>Panfletos</li>
            <li>Banners</li>
            <li>Expositores</li>
            <li>Impressão Digital</li>
          </ul>
        </ul>
        <br></br>
        <hr></hr>
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
