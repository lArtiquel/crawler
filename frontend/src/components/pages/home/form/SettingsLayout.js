import React from 'react'
import { TextField, Box } from '@material-ui/core'
import { Field } from 'formik'

const SettingsLayout = ({ errors, touched }) => {
  return (
    <Box my={2} display="flex" flexDirection="row">
      <Box mr={1} flexGrow={1}>
        <Field
          as={TextField}
          label="Page limit"
          name="limit"
          variant="outlined"
          type="number"
          margin="dense"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputProps: {
              min: 1,
              max: 10000
            }
          }}
          error={errors.limit && touched.limit}
          helperText={errors.limit && touched.limit ? errors.limit : ''}
          fullWidth
        />
      </Box>
      <Box ml={1} flexGrow={1}>
        <Field
          as={TextField}
          label="Depth"
          name="depth"
          variant="outlined"
          type="number"
          margin="dense"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputProps: {
              min: 1,
              max: 8
            }
          }}
          error={errors.depth && touched.depth}
          helperText={errors.depth && touched.depth ? errors.depth : ''}
          fullWidth
        />
      </Box>
    </Box>
  )
}

export default SettingsLayout
