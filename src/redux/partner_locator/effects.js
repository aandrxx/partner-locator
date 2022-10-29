import apiClient from 'services/axios'

import { addFiltersItem } from 'services/helpers'
import actions from './actions'

export function setCurrentLocCountry(value) {
    return (dispatch, getState) => {
        let filters = getState().partner_locator.filters
        if(value) {
            const states = getState().loc_states.items
            const selectedState = filters.find(item => item.field === 'state')
            if(value && selectedState && !states.find(item => item.country_id === value && item.state_id === selectedState.id)) {
                filters = filters.filter(item => item.field !== 'state')
            }
            filters = addFiltersItem(filters, { field: 'country', ...value, id: +value.id })
        } else {
            filters = filters.filter(item => item.field !== 'country')
        }
        
        dispatch({
            type: actions.SET_CURRENT_LOCCOUNTRY,
            filters
        });
    }
}

export function getPartners(filters = []) {
    return (dispatch) => {
        const filtersMapped = filters.map(item => {
            if(item.field === 'searchString') return [ 'searchString', item.text ]
            if(item.field === 'state') return [ 'states_covered_contains', item.key ]
            if(item.field === 'country') return [ 'countries_covered_contains', item.key ]
            if(item.field === 'status') return [ 'status', item.text ]
            return false
        })
        dispatch({
            type: actions.GET_ITEMS_LOADING,
            filters: filtersMapped
        });
        apiClient
            .get('/partner-locator/partners'+(filtersMapped.length > 0 ? `?${filtersMapped.map((item) => item.join('=')).join('&')}` : ''))
            .then((response) => {
                if (response) {
                    dispatch({
                        type: actions.GET_ITEMS_SUCCESS,
                        data: response.data
                    });
                }
            })
            .catch((err) => console.log(err))
    }
} 