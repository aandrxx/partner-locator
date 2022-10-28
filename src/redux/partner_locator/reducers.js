import actions from './actions'

const initialState = {
  filter: {
    searchString: '',
    status: {},
    country: {},
    state: {},
  },
  items: [],
  loading: false,
  loaded: false,
}

export default function locatorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CURRENT_LOCSTATE:
      return { ...state, filter: { ...state.filter, state: action.data } }
    case actions.GET_ITEMS_LOADING:
      return { ...state, loading: true, loaded: false, items: [] }
    case actions.GET_ITEMS_SUCCESS:
      return { ...state, loading: false, loaded: true, items: action.data }
    default:
      return state
  }
}
