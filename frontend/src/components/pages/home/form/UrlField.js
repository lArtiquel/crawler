import React from 'react'
import { TextField, Box, InputAdornment } from '@material-ui/core'
import HttpOutlinedIcon from '@material-ui/icons/HttpOutlined'
import { Field } from 'formik'

const UrlField = ({ error, touched }) => {
  return (
    <Box my={2}>
      <Field
        as={TextField}
        label="Enter URL"
        name="url"
        variant="outlined"
        type="text"
        autoFocus
        margin="dense"
        fullWidth
        error={error && touched}
        helperText={error && touched ? error : ''}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HttpOutlinedIcon />
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}

export default UrlField
