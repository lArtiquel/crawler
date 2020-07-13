import React from 'react'
import { Box, Button } from '@material-ui/core'
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined'

const SubmitButton = () => {
  return (
    <Box my={2}>
      <Button
        type="submit"
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

export default SubmitButton
