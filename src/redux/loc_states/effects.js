import apiClient from 'services/axios'
import actions from './actions'

export function getLocStates() {
    return (dispatch, getState) => {
        dispatch({
            type: actions.GET_ITEMS_LOADING,
            filter: {}
        });
        apiClient
            .get('/states')
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