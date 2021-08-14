import React, { useState } from 'react'
import Layout from '@/components/layout'

export default function Control({ children }) {
  const [counter, setCounter] = useState(1)

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  )

  return (
    <>
      <Layout>
        <h1>Weather</h1>
      </Layout>
    </>
  )
}
