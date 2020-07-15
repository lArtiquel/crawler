import axios from 'axios'
import { HomeActions } from '../../constants/actions'

export const CrawlAction = () => {
  return (dispatch, getState) => {
    const state = getState()

    // change Frame to PROCESSING
    dispatch({ type: HomeActions.SET_PROCESSING_FRAME })

    axios({
      url: 'https://srawler.herokuapp.com/api/crawlUrl',
      // i'm having some troubles sending req data in params
      method: 'post',
      data: state.home.request
    })
      .then((response) => {
        // clean Form for next Request
        dispatch({ type: HomeActions.CLEAR_FORM })
        // set response data
        dispatch({ type: HomeActions.CRAWL, payload: response.data })
        // change frame to RESULTS
        dispatch({ type: HomeActions.SET_RESULTS_FRAME })
      })
      .catch((error) => {
        // set back FORM frame
        dispatch({ type: HomeActions.SET_FORM_FRAME })
        // set request error
        dispatch({ type: HomeActions.SET_RESPONSE_ERROR })
      })
  }
}

export const ChangeFormFieldAction = (name, value) => {
  return (dispatch) => {
    dispatch({
      type: HomeActions.CHANGE_FORM_FIELD,
      payload: { name, value }
    })
  }
}

export const ChangeTermsAction = (terms) => {
  return (dispatch) => {
    dispatch({
      type: HomeActions.CHANGE_TERMS,
      payload: terms
    })
  }
}

export const CloseErrorDialogAction = () => {
  return (dispatch) => dispatch({ type: HomeActions.CLEAR_RESPONSE_ERROR })
}

export const SetFormFrameAction = () => {
  return (dispatch) => dispatch({ type: HomeActions.SET_FORM_FRAME })
}
