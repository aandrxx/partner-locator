import React from 'react'

import { FormGroup, CountriesSelect, StatesSelect, StatusSelect, SearchInput } from 'components'

import './searchForm.scss'

const SearchForm = () => {
    
    return (
        <div className="main__hero__search_form">
            <SearchInput />
            <div className="main__hero__search_form__filter">
                <div className="main__hero__search_form__filter__type">
                    <StatusSelect />
                </div>
                <div className="main__hero__search_form__filter__location">
                    <FormGroup
                        variant="outlined"
                        size="small"
                        endAdornment={<StatesSelect />}
                    >
                        <CountriesSelect />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}

export default SearchForm
