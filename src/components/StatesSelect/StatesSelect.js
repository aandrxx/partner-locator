import React from 'react'
import { useSelector } from 'react-redux'
import { Select } from 'components'

const statesItemsSelector = state => state.states.items
const statesLoadingSelector = state => state.states.loading

const StatesSelect = () => {
    const items = useSelector(statesItemsSelector);
    const loading = useSelector(statesLoadingSelector);
    
    return (
        <Select variant="outlined" size="small" loading={loading} options={items} />
    )
}

export default StatesSelect
