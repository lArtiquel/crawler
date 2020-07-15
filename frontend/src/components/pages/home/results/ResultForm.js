import React from 'react'
import { Box } from '@material-ui/core'
import Header from './Header'
import ResultList from './ResultList/ResultList'
import GoBackButton from './GoBackButton'
import DownloadResultsButton from './DownloadResultsButton'

export default function ResultForm() {
  return (
    <Box my={2}>
      <Header />
      <ResultList />
      <DownloadResultsButton />
      <GoBackButton />
    </Box>
  )
}
