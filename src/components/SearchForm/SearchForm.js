import React from 'react'

import { IconButton, Input, FormGroup, Select } from 'components'
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
                    <Select variant="outlined" size="small" />
                </div>
                <div className="main__hero__search_form__filter__location">
                    <FormGroup
                        variant="outlined"
                        size="small"
                        endAdornment={<Select />}
                    >
                        <Select />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}

export default SearchForm
