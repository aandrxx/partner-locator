import actions from './actions'

const initialState = {
  filters: [],
  items: [],
  loading: false,
  loaded: false,
}

const addItem = (array, newItem) => {
  let newArray = array.slice()
  const currentIndex = newArray.findIndex(item => item.field === newItem.field)
  if(currentIndex !== -1) {
    newArray.splice(currentIndex, 1, newItem)
  } else {
    newArray.push(newItem)
  }
  return newArray
}

export default function locatorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CURRENT_LOCSTATE:
      return { 
        ...state,
        filters: action.data 
          ? addItem(state.filters, action.data)
          : state.filters.filter(item => item.field !== 'state')
      }
    case actions.SET_CURRENT_SEARCHSTRING:
      return { 
        ...state,
        filters: action.data 
          ? addItem(state.filters, action.data)
          : state.filters.filter(item => item.field !== 'searchString')
      }
    case actions.SET_CURRENT_STATUS:
      return { 
        ...state,
        filters: action.data 
          ? addItem(state.filters, action.data)
          : state.filters.filter(item => item.field !== 'status')
      }
    case actions.SET_CURRENT_LOCCOUNTRY:
      return { 
        ...state,
        filters: action.data 
          ? addItem(state.filters, action.data)
          : state.filters.filter(item => item.field !== 'country')
      }
    case actions.GET_ITEMS_LOADING:
      return { ...state, loading: true, loaded: false, items: [] }
    case actions.GET_ITEMS_SUCCESS:
      return { ...state, loading: false, loaded: true, items: action.data }
    default:
      return state
  }
}
