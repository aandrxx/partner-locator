import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'components'

import { getLocCountries } from 'redux/loc_countries/effects'
import { setCurrentLocCountry } from 'redux/partner_locator/effects'

const countriesItemsSelector = state => state.loc_countries.items
const countriesLoadingSelector = state => state.loc_countries.loading

const CountriesSelect = () => {
    const items = useSelector(countriesItemsSelector)
    const loading = useSelector(countriesLoadingSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLocCountries())
    }, [ dispatch ])

    const itemsMapped = items.map(item => ({ id: item.country_id, key: item.short_name, text: item.name }))

    const _onChange = useCallback((value) => {
        dispatch(setCurrentLocCountry(value))
    }, [ dispatch ])
    
    return (
        <Select variant="outlined" size="small" placeHolder="Country" loading={loading} options={itemsMapped} onChange={_onChange} disabled={itemsMapped.length === 0} />
    )
}

export default CountriesSelect
