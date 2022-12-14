import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

import { IconButton, Input, FormGroup } from 'components'
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg'

import './select.scss'

const SelectComponent = ({
    className = '',
    placeHolder = 'No chosen',
    disabled = false,
    options = [],
    loading = false,
    initialValue = { id: '', key: '', text: '' },
    onChange = () => false,
    ...restProps
}) => {
    const [ open, setOpen ] = useState(false)
    const [ value, setValue ] = useState(initialValue)
    const [ searchString, setSearchString ] = useState('')

    useEffect(() => {
        setValue({ key: initialValue.key || '', text: initialValue.text || '', id: initialValue.id || '' })
    }, [ initialValue.key, initialValue.text, initialValue.id ])

    const _toggleDropdown = useCallback(() => {
        setOpen((prev) => !prev)
    }, [])

    const _onChange = useCallback((event) => {
        const value = { id: event.target.getAttribute("data-id"), key: event.target.getAttribute("data-key"), text: event.target.getAttribute("data-text") }
        setValue({ id: '', key: '', text: '', ...value })
        onChange(value)
        _toggleDropdown()
    }, [ onChange, _toggleDropdown ])

    const _onSearch = (event) => {
        setSearchString(event.target.value)
    }

    const optionsFiltered = options.filter((option) => option.text.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
    const optionsMapped = optionsFiltered.map((item, i) => <div 
            key={i} 
            onClick={_onChange} 
            className={
                classNames(
                    {
                        'form__select__dropdown__item': true,
                        '--is_selected': value.text && item.text === value.text,
                    }
                )
            }
            data-id={item.id} 
            data-key={item.key} 
            data-text={item.text}
            role="option"
            aria-selected={value.text && item.text === value.text ? true : false}
        >
            { item.text || item.key }
        </div>)

    return (
        <FormGroup 
            endAdornment={<IconButton onClick={_toggleDropdown} icon={<ArrowIcon width="20" />} />}
            role="listbox"
            className={
                classNames(
                    {
                        'form__select': true,
                        '--is_disabled': disabled,
                    },
                    ...className.split(' ')
                )
            }
            {...restProps}
        >
            <button 
                className="form__select__value" 
                disabled={disabled} 
                onClick={_toggleDropdown}
            >
                { loading ? 'Loading...' : value.text || value.key || placeHolder }
            </button>
            <div className={
                    classNames(
                        {
                            'form__select__dropdown': true,
                            '--is_visible': open,
                        }
                    )
                }
            >
                <div className="form__select__dropdown__input"><Input onChange={_onSearch} fullWidth={true} size="small" variant="outlined" /></div>
                <div className="form__select__dropdown__items">
                    { optionsMapped.length > 0 ? optionsMapped : <div data-state="is_disabled" className="form__select__dropdown__item"> Not found</div> }
                </div>
            </div>
        </FormGroup>
    )
}

export default SelectComponent
