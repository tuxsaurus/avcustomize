// uder/delete.js
import React from 'react'
import { useTable, useSortBy } from 'react-table'

import Layout from '@/components/layout'

export default function Work() {
  const data = React.useMemo(
    () => [
      {
        fromUnit: 'Nilda',
        toUnit: '33 (h)',
        factor: 25.4,
      },
      {
        fromUnit: 'feet',
        toUnit: 'centimetres (cm)',
        factor: 30.48,
      },
      {
        fromUnit: 'yards',
        toUnit: 'metres (m)',
        factor: 0.91444,
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'fromUnit',
      },
      {
        Header: 'Horas Trabalhadas',
        accessor: 'toUnit',
      },
      {
        Header: 'A Pagar',
        accessor: 'factor',
        isNumeric: true,
      },
    ],
    []
  )

  //  const {
  //    getTableProps,
  //    getTableBodyProps,
  //    headerGroups,
  //    rows,
  //    prepareRow,
  //  } = useTable({ columns, data }, useSortBy)

  return (
    <Layout>
      <div title="work">
        <h1>Work Force</h1>
      </div>
    </Layout>
  )
}
// className={styles._404}
