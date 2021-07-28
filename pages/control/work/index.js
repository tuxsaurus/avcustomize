// uder/delete.js
import React from 'react'
import { useTable, useSortBy } from 'react-table'

import { Heading } from '@chakra-ui/react'
import Layout from '@/components/layout'

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <Layout>
      <div title="work">
        <Heading>Work Force</Heading>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {column.render('Header')}
                    <chakra.span pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </div>
    </Layout>
  )
}
// className={styles._404}
