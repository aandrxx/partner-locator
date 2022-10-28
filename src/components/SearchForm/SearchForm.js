import React from 'react'

import { IconButton, Input, FormGroup, CountriesSelect, StatesSelect, StatusSelect } from 'components'
import { ReactComponent as SearchIcon } from 'assets/images/search-ico.svg'

import './searchForm.scss'

const SearchForm = () => {
    
    return (
        <div className="main__hero__search_form">
            <FormGroup
                endAdornment={<IconButton icon={<SearchIcon />} />}
                className="main__hero__search_form__input"
            >
                <Input placeholder="Search by company name or address.." />
            </FormGroup>
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
