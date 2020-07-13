import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { CloseErrorDialogAction } from '../../../../store/actions/homeActions'

const ErrorDialog = ({ isOpen, error, closeDialog }) => {
  const handleClose = () => {
    closeDialog()
  }

  return (
    <>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{error}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    // if string is not '' -> dialog should be opened
    // !! converts str value to boolean
    isOpen: !!state.home.error,
    error: state.home.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeDialog: () => dispatch(CloseErrorDialogAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDialog)
