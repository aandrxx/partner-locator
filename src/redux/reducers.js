import { combineReducers } from 'redux'
import loc_states from './loc_states/reducers'
import partner_locator from './partner_locator/reducers'
import statuses from './statuses/reducers'

const rootReducer = () =>
  combineReducers({
    partner_locator,
    loc_states,
    statuses
})

export default rootReducer
