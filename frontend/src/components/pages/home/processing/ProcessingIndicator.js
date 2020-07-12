import React from 'react'
import { Box, Typography, CircularProgress } from '@material-ui/core'

export default function ProcessingIndicator() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDirection="column"
    >
      <Typography variant="h5" color="primary" align="center" gutterBottom>
        Processing request...
      </Typography>
      <Box my={3}>
        <CircularProgress color="secondary" />
      </Box>
    </Box>
  )
}
