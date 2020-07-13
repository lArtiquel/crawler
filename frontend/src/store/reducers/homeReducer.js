import { HomeActions } from '../../constants/actions'
import { HomeFrames } from '../../constants/frames'

const initState = {
  frame: HomeFrames.FORM,
  request: {
    url: '',
    limit: 10,
    depth: 3,
    terms: []
  },
  error: '',
  response: [
    {
      url: 'https://google.com',
      isBad: false,
      termsToEntries: {
        react: 8,
        redux: 5,
        lArtiquel: 228
      }
    },
    {
      url: 'https://goofy.com',
      isBad: true,
      termsToEntries: {}
    },
    {
      url: 'https://oracle.com',
      isBad: false,
      termsToEntries: {
        Java: 15,
        Collections: 5,
        lArtiquel: 15
      }
    }
  ]
}

export default function HomeReducer(state = initState, action) {
  switch (action.type) {
    case HomeActions.CRAWL:
      return {
        ...state,
        response: action.payload
      }

    case HomeActions.CHANGE_FORM_FIELD: {
      return {
        ...state,
        request: {
          ...state.request,
          [action.payload.name]: action.payload.value
        }
      }
    }

    case HomeActions.CHANGE_TERMS: {
      return {
        ...state,
        request: {
          ...state.request,
          terms: action.payload
        }
      }
    }

    case HomeActions.SET_FORM_FRAME: {
      return {
        ...state,
        frame: HomeFrames.FORM
      }
    }

    case HomeActions.SET_PROCESSING_FRAME: {
      return {
        ...state,
        frame: HomeFrames.PROCESSING
      }
    }

    case HomeActions.SET_RESULTS_FRAME: {
      return {
        ...state,
        frame: HomeFrames.RESULTS
      }
    }

    case HomeActions.CLEAR_FORM: {
      return {
        ...state,
        request: {
          ...initState.request
        }
      }
    }

    case HomeActions.SET_RESPONSE_ERROR: {
      return {
        ...state,
        error: 'Sorry, some unexpected error occured. Try service later.'
      }
    }

    case HomeActions.CLEAR_RESPONSE_ERROR: {
      return {
        ...state,
        error: ''
      }
    }

    default:
      return {
        ...state
      }
  }
}
