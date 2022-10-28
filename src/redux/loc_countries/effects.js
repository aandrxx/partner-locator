import apiClient from 'services/axios'
import actions from './actions'

export function getLocCountries() {
    return (dispatch) => {
        dispatch({
            type: actions.GET_ITEMS_LOADING,
            filter: {}
        });
        apiClient
            .get('/countries')
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