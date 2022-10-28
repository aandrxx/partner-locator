import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

import { IconButton, Input, FormGroup } from 'components'
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg'

import './select.scss'

const SelectComponent = ({
    className = '',
    placeHolder = 'No chosen',
    options = [],
    loading = false,
    onChange = () => false,
    ...restProps
}) => {
    const [ open, setOpen ] = useState(false)
    const [ value, setValue ] = useState({ key: '', text: '' })
    const [ searchString, setSearchString ] = useState('')

    useEffect(() => {
        if(!options.find(item => item.key === value.key)) {
            setValue({ key: '', text: '' })
            onChange({ key: '', text: '' })
        }
    }, [ options, onChange, value.key ])

    const _onChange = useCallback((event) => {
        const value = { id: event.target.getAttribute("data-id"), key: event.target.getAttribute("data-key"), text: event.target.getAttribute("data-text") }
        setValue(value)
        onChange(value)
        _toggleDropdown()
    }, [onChange])

    const _onSearch = (event) => {
        setSearchString(event.target.value)
    }

    const _toggleDropdown = () => {
        setOpen((prev) => !prev)
    }
    const optionsFiltered = options.filter((option) => option.text.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
    const optionsMapped = optionsFiltered.map((item, i) => <div key={i} onClick={_onChange} className="form__select__dropdown__item" data-id={item.id} data-key={item.key} data-text={item.text}>{ item.text || item.key }</div>)
    
    return (
        <FormGroup 
            fullWidth={true}
            endAdornment={<IconButton icon={<ArrowIcon onClick={_toggleDropdown} width="20" />} />}
            className={
                classNames(
                    {
                        'form__select': true,
                    },
                    ...className.split(' ')
                )
            }
            {...restProps}
        >
            <div className="form__select__value" onClick={_toggleDropdown}>{ loading ? 'Loading...' : value.text || value.key || placeHolder }</div>
            <div className={
                    classNames(
                        {
                            'form__select__dropdown': true,
                            '--is_visible': open,
                        }
                    )
                }
            >
                <div className="form__select__dropdown__input"><Input onChange={_onSearch} variant="outlined" /></div>
                <div className="form__select__dropdown__items">
                    { optionsMapped.length > 0 ? optionsMapped : <div data-state="is_disabled" className="form__select__dropdown__item"> Not found</div> }
                </div>
            </div>
        </FormGroup>
    )
}

export default SelectComponent
