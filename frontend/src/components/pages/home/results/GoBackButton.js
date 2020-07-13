import React from 'react'
import { connect } from 'react-redux'
import { Button, Box } from '@material-ui/core'
import { ArrowBackIosOutlined as GoBackIcon } from '@material-ui/icons'
import { SetFormFrameAction } from '../../../../store/actions/homeActions'

const GoBackButton = ({ goBack }) => {
  return (
    <Box my={2}>
      <Button
        onClick={goBack}
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

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => dispatch(SetFormFrameAction())
  }
}

export default connect(null, mapDispatchToProps)(GoBackButton)
