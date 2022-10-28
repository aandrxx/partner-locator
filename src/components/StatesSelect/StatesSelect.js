import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'components'

import { getLocStates } from 'redux/loc_states/effects'

import actions from 'redux/partner_locator/actions'

const statesItemsSelector = state => state.loc_states.items
const statesLoadingSelector = state => state.loc_states.loading

const StatesSelect = () => {
    const items = useSelector(statesItemsSelector)
    const loading = useSelector(statesLoadingSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLocStates())
    }, [ dispatch ])

    const itemsMapped = items.map(item => ({ key: item.short_name, text: item.name }))

    const _onChange = useCallback((value) => {
        dispatch({ type: actions.SET_CURRENT_LOCSTATE, data: value })
    }, [ dispatch ])
    
    return (
        <Select variant="outlined" size="small" placeHolder="State" loading={loading} options={itemsMapped} onChange={_onChange} />
    )
}

export default StatesSelect
