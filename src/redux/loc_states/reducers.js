import actions from './actions'

const initialState = {
  items: [],
  loading: false,
  loaded: false,
}

export default function statesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    case actions.GET_ITEMS_LOADING:
      return { ...state, loading: true, loaded: false, items: [] }
    case actions.GET_ITEMS_SUCCESS:
      return { ...state, loading: false, loaded: true, items: action.data }
    default:
      return state
  }
}
