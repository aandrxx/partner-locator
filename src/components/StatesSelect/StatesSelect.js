import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'components'

import { getLocStates } from 'redux/loc_states/effects'

const statesItemsSelector = state => state.loc_states.items
const statesLoadingSelector = state => state.loc_states.loading

const StatesSelect = () => {
    const items = useSelector(statesItemsSelector)
    const loading = useSelector(statesLoadingSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLocStates())
    }, [dispatch])

    const itemsMapped = items.map(item => ({ key: item.short_name, text: item.name }))
    
    return (
        <Select variant="outlined" size="small" placeHolder="State" loading={loading} options={itemsMapped} />
    )
}

export default StatesSelect
