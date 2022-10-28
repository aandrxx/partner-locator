import apiClient from 'services/axios'
import actions from './actions'

const parseResponse = (data) => {

    return data;
}

export function getPartners(filters = []) {
    const filtersMapped = filters.map(item => {
        if(item.field === 'searchString') return [ 'searchString', item.text ]
        if(item.field === 'state') return [ 'states_covered_contains', item.key ]
        if(item.field === 'country') return [ 'countries_covered_contains', item.key ]
        if(item.field === 'status') return [ 'status', item.text ]
        return false
    })
    return (dispatch) => {
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
                        data: parseResponse(response.data)
                    });
                }
            })
            .catch((err) => console.log(err))
    }
} 