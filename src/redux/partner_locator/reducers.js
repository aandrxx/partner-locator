import actions from './actions'

const initialState = {
  filters: [],
  items: [],
  loading: false,
  loaded: false,
}

const replaceItem = (array, newItem) => {
  let newArray = array.slice();
  newArray.splice(newArray.findIndex(item => item.id === newItem.id), 1, newItem);
  return newArray;
}

export default function locatorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CURRENT_LOCSTATE:
      return { 
        ...state,
        filters: action.data 
          ? replaceItem(state.filters, action.data)
          : state.filters.filter(item => item.field !== 'state')
      }
    case actions.GET_ITEMS_LOADING:
      return { ...state, loading: true, loaded: false, items: [] }
    case actions.GET_ITEMS_SUCCESS:
      return { ...state, loading: false, loaded: true, items: action.data }
    default:
      return state
  }
}
