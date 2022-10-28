import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { FormGroup, IconButton, Input } from 'components'
import { ReactComponent as SearchIcon } from 'assets/images/search-ico.svg'

import actions from 'redux/partner_locator/actions'

const SearchInput = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null);

    const _onSubmit = (value) => {
        dispatch({ 
            type: actions.SET_CURRENT_SEARCHSTRING, 
            data: value ? { field: 'searchString', text: value } : '' 
        })
    }

    const _onKeyPress = (event) => {
        if(event.key === 'Enter') _onSubmit(event.target.value)
    }

    const _onClick = () => {
        _onSubmit(inputRef.current.value);
    }

    return (
        <FormGroup
            endAdornment={<IconButton icon={<SearchIcon onClick={_onClick} />} />}
            className="main__hero__search_form__input"
        >
            <Input ref={inputRef} onKeyPress={_onKeyPress} placeholder="Search by company name or address.." />
        </FormGroup>
    )
}

export default SearchInput
