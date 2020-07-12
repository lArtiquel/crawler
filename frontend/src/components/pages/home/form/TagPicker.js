import React from 'react'
import { Chip, Box, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'

const TagPicker = () => {
  return (
    <Box my={2}>
      <Autocomplete
        multiple
        freeSolo
        options={[]}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Select the terms you want to find"
            placeholder="Terms"
          />
        )}
        fullWidth
      />
    </Box>
  )
}

export default TagPicker
