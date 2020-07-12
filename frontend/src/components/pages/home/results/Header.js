import React from 'react'
import { Typography, Box } from '@material-ui/core'

export default function Header() {
  return (
    <Box my={2}>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        Let&apos;s see what we&apos;ve got for you ...
      </Typography>
    </Box>
  )
}
