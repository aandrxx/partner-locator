import apiClient from 'services/axios'
import actions from './actions'

export function getStatuses() {
    return (dispatch) => {
        dispatch({
            type: actions.GET_ITEMS_LOADING,
            filter: {}
        });
        apiClient
            .get('/partner-locator/statuses')
            .then((response) => {
                if (response) {
                    dispatch({
                        type: actions.GET_ITEMS_SUCCESS,
                        data: response.data.map(item => item.status)
                    });
                }
            })
            .catch((err) => console.log(err))
    }
}