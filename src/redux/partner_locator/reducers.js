import actions from './actions'
import { addFiltersItem } from 'services/helpers'

const initialState = {
  filters: [],
  items: [],
  loading: false,
  loaded: false,
}

export default function locatorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CURRENT_LOCSTATE:
      return { 
        ...state,
        filters: action.data 
          ? addFiltersItem(state.filters, action.data)
          : state.filters.filter(item => item.field !== 'state')
      }
    case actions.SET_CURRENT_SEARCHSTRING:
      return { 
        ...state,
        filters: action.data 
          ? addFiltersItem(state.filters, action.data)
          : state.filters.filter(item => item.field !== 'searchString')
      }
    case actions.SET_CURRENT_STATUS:
      return { 
        ...state,
        filters: action.data 
          ? addFiltersItem(state.filters, action.data)
          : state.filters.filter(item => item.field !== 'status')
      }
    case actions.SET_CURRENT_LOCCOUNTRY:
      return { 
        ...state,
        filters: action.filters
      }
    case actions.GET_ITEMS_LOADING:
      return { ...state, loading: true, loaded: false, items: [] }
    case actions.GET_ITEMS_SUCCESS:
      return { ...state, loading: false, loaded: true, items: action.data }
    default:
      return state
  }
}
