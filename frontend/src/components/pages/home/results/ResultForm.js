import React from 'react'
import { Box } from '@material-ui/core'
import Header from './Header'
import ResultList from './ResultList/ResultList'
import GoBackButton from './GoBackButton'

export default function ResultForm() {
  return (
    <Box my={2}>
      <Header />
      <ResultList />
      <GoBackButton />
    </Box>
  )
}
