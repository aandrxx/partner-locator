import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'components'

import { getLocStates } from 'redux/loc_states/effects'
import actions from 'redux/partner_locator/actions'

const statesItemsSelector = state => state.loc_states.items
const statesLoadingSelector = state => state.loc_states.loading
const countrySelector = state => state.partner_locator.filters.find(item => item.field === 'country')
const stateSelector = state => state.partner_locator.filters.find(item => item.field === 'state')

const StatesSelect = () => {
    const items = useSelector(statesItemsSelector)
    const loading = useSelector(statesLoadingSelector)
    const country = useSelector(countrySelector)
    const state = useSelector(stateSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLocStates())
    }, [ dispatch ])

    const _onChange = useCallback((value) => {
        dispatch({ 
            type: actions.SET_CURRENT_LOCSTATE, 
            data: value.key || value.text ? { field: 'state', ...value } : '' 
        })
    }, [ dispatch ])
    
    const itemsFiltered = country ? items.filter(item => item.country_id === country.id) : items;
    const itemsMapped = itemsFiltered.map(item => ({ key: item.short_name, text: item.name }))
    
    return (
        <Select variant="outlined" size="small" placeHolder="State" loading={loading} options={itemsMapped} onChange={_onChange} initialValue={state} disabled={itemsMapped.length === 0} />
    )
}

export default StatesSelect
