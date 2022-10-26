import React, { useState } from 'react'
import classNames from 'classnames'

import { IconButton, Input, FormGroup } from 'components'
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg'

import './select.scss'

const SelectComponent = ({
    className = '',
    ...restProps
}) => {
    const [ open, setOpen ] = useState(false);

    const _toggleDropdown = () => {
        setOpen((prev) => !prev);
    }

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
            <div className="form__select__value" onClick={_toggleDropdown}>Value</div>
            <div className={
                    classNames(
                        {
                            'form__select__dropdown': true,
                            '--is_visible': open,
                        }
                    )
                }
            >
                <div className="form__select__dropdown__input"><Input variant="outlined" /></div>
                <div className="form__select__dropdown__items">
                    <div className="form__select__dropdown__item">SDF</div>
                    <div className="form__select__dropdown__item">addresssd</div>
                    <div className="form__select__dropdown__item">aklsdj</div>
                    <div className="form__select__dropdown__item">sd</div>
                    <div className="form__select__dropdown__item">fg</div>
                    <div className="form__select__dropdown__item">SDF</div>
                </div>
            </div>
        </FormGroup>
    )
}

export default SelectComponent
