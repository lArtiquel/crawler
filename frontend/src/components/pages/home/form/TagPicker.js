import React from 'react'
import { connect } from 'react-redux'
import { Chip, Box, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { ChangeTermsAction } from '../../../../store/actions/homeActions'

const TagPicker = ({ terms, changeTerms }) => {
  const handleChange = (event, value, reason) => {
    /*
     * Just change terms array in Redux state (does not matter by what reason)
     */
    changeTerms(value)
  }

  return (
    <Box my={2}>
      <Autocomplete
        multiple
        freeSolo
        value={terms}
        options={[]}
        renderTags={(value, getTagProps) =>
          value.map((term, index) => (
            <Chip variant="outlined" label={term} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Select terms you want to find on the pages"
            placeholder="Terms"
            onChange={(e) => {
              /*
               * Just because it handles changes differently then other Form components.
               * Stop propagation here.
               * I just don't wanna TagPicker be ouside the Form
               */
              e.stopPropagation()
            }}
          />
        )}
        fullWidth
        onChange={handleChange}
      />
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    terms: state.home.request.terms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTerms: (terms) => dispatch(ChangeTermsAction(terms))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagPicker)
