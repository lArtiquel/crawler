import React from 'react'
import { Box, Button } from '@material-ui/core'
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined'

export default function SubmitButton() {
  return (
    <Box my={2}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<FindInPageOutlinedIcon />}
      >
        Crawl URL
      </Button>
    </Box>
  )
}
