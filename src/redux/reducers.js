import { combineReducers } from 'redux'
import partner_locator from './partner_locator/reducers'

const rootReducer = () =>
  combineReducers({
    partner_locator,
})

export default rootReducer
