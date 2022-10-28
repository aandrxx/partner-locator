import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'components'

import { getStatuses } from 'redux/statuses/effects'
import actions from 'redux/partner_locator/actions'

const statusesItemsSelector = state => state.statuses.items
const statusesLoadingSelector = state => state.statuses.loading

const StatusSelect = () => {
    const items = useSelector(statusesItemsSelector)
    const loading = useSelector(statusesLoadingSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStatuses())
    }, [ dispatch ])

    const itemsMapped = items.map(item => ({ key: '', text: item }))

    const _onChange = useCallback((value) => {
        dispatch({ 
            type: actions.SET_CURRENT_STATUS, 
            data: value.key || value.text ? { field: 'status', ...value } : '' 
        })
    }, [ dispatch ])
    
    return (
        <Select variant="outlined" size="small" placeHolder="Type" loading={loading} options={itemsMapped} onChange={_onChange} disabled={itemsMapped.length === 0} />
    )
}

export default StatusSelect
