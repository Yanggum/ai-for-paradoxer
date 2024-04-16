'use client'

import React, { useState } from 'react'
import { Box, Button, Checkbox, Grid, rem, Table, Text, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import classes from './Localization.module.css'
import { useForm } from '@mantine/form'
import { DatePickerInput, DateValue } from '@mantine/dates'
import dayjs from 'dayjs'
import cx from 'clsx'
import Link from 'next/link'
import { UserDetail } from '../../app/api/localizations/route'

function filterData(users: UserDetail[], search: any) {
  const { } = search

  let result = users
  return result
}

export function Localization({ users }: { users: any[] }) {
  const [search, setSearch] = useState<{
    id: string
  }>({
    id: '',
  })

  const [sortedData, setSortedData] = useState(users)

  const [selection, setSelection] = useState<string[]>([])
  const toggleRow = (userId: string) =>
    setSelection(current =>
      current.includes(userId)
        ? current.filter(item => item !== userId)
        : [...current, userId],
    )

  const userId = users.length > 0 ? users[0].id : ''

  const toggleAll = () =>
    setSelection(current => (current.length === users.length ? [] : users.map(item => item.id)))

  // const [loading, setLoading] = useState(false);
  //
  // const handleDownload = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`/api/test/download?testNo=${testNo}&testList=${selection.join(',')}`, {
  //       cache: 'no-store',
  //     });
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(new Blob([blob]));
  //     const a = document.createElement('a');
  //     a.href = url;
  //     document.body.appendChild(a);
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    const newSearch = {
      ...search,
      [name]: value,
    }

    setSearch(newSearch)
    setSortedData(filterData(users, newSearch))
  }

  const handleSearchStartDateChange = (value: DateValue) => {
    const newSearch = {
      ...search,
      startDate: value,
    }

    setSearch(newSearch)
    setSortedData(filterData(users, newSearch))
  }

  const handleSearchEndDateChange = (value: DateValue) => {
    const newSearch = {
      ...search,
      endDate: value,
    }

    setSearch(newSearch)
    setSortedData(filterData(users, newSearch))
  }

  const rows = sortedData.map((row, index) => {
    const selected = selection.includes(row.id)

    return (
      <Table.Tr key={row.id + index} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox
            checked={selection.includes(row.id)}
            onChange={() => toggleRow(row.id)}
          />
        </Table.Td>
        <Table.Td>{row.id}</Table.Td>
        <Table.Td>{row.id}</Table.Td>
        <Table.Td>{row.id}</Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
      </Table.Tr>
    )
  })

  const form = useForm({
    initialValues: {
      startDate: null,
      endDate: null,
    },
  })

  return (
    <>
      <Box mb='md'>
        <h3 style={{ display: 'inline' }}>Localization Management</h3>
        <Text style={{ display: 'inline' }} ml='0.5rem' fz='1.17rem'>
          {userId}
        </Text>
      </Box>
      <form onSubmit={form.onSubmit(values => console.log(values))} className={classes.searchForm} autoComplete={'off'}>
        <Grid>
          <Grid.Col span={1.5}>
            <TextInput
              name='testUserNo'
              label='Total Search #'
              leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
              //value={search.serialNo}
              onChange={handleSearchChange}
            />
          </Grid.Col>
          <Grid.Col span='content' style={{ display: 'flex' }}>
            <Button
              style={{ alignSelf: 'flex-end' }}
              ml={10}
              disabled={selection.length === 0}
              // onClick={handleDownload}
              component={Link}
              href={{
                pathname: '/api/test/download',
                query: {
                  poNo: userId,
                  contractNoList: selection,
                },
              }}>
              Upload Localization
            </Button>
            <Button
              style={{ alignSelf: 'flex-end' }}
              ml={10}
              disabled={selection.length === 0}
              // onClick={handleDownload}
              component={Link}
              href={{
                pathname: '/api/test/download',
                query: {
                  poNo: userId,
                  contractNoList: selection,
                },
              }}>
              Download Localization
            </Button>
          </Grid.Col>
        </Grid>
      </form>
      {/*{loading && <div className='spinner'>Downloading...</div>}*/}
      <Table horizontalSpacing='md' verticalSpacing='xs' miw={400} mt='md'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === users.length}
                indeterminate={selection.length > 0 && selection.length !== users.length}
              />
            </Table.Th>
            <Table.Th>test #</Table.Th>
            <Table.Th>test #</Table.Th>
            <Table.Th>test Description</Table.Th>
            <Table.Th>test Start</Table.Th>
            <Table.Th>test test</Table.Th>
            <Table.Th>test</Table.Th>
            <Table.Th>test test</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody id={'test'}>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={6}>
                <Text fw={500} ta='center'>
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </>
  )
}
