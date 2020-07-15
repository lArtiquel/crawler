import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Box, Button } from '@material-ui/core'
import { GetAppOutlined as DownloadIcon } from '@material-ui/icons'
import { Parser } from 'json2csv'

const DownloadResultsButton = ({ data }) => {
  const [content, setContent] = useState()

  useEffect(() => {
    const fields = ['url', 'badUrl', 'termsToEntries']
    const json2csvParser = new Parser({ fields })
    const csv = json2csvParser.parse(data)
    /*
        Encode '#' symbol manually, 
        cause browser ocasionally thinks that this is the anchor path 
        and skips the rest of the URL after
    */
    const nonSharpedURI = csv.replace(/#/g, '%23')
    setContent(nonSharpedURI)
  }, [data])

  return (
    <Box my={2}>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        startIcon={<DownloadIcon />}
        href={`data:text/csv;charset=utf-8,%EF%BB%BF${content}`}
        download="Results.csv"
      >
        Download CSV results
      </Button>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.home.response
  }
}

export default connect(mapStateToProps)(DownloadResultsButton)
