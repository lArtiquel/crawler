import React from 'react'
import { Button, Box } from '@material-ui/core'
import { ArrowBackIosOutlined as GoBackIcon } from '@material-ui/icons'

export default function GoBackButton() {
  return (
    <Box my={2}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<GoBackIcon />}
      >
        Go back
      </Button>
    </Box>
  )
}
