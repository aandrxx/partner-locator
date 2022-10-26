import React from 'react'
import classNames from 'classnames';

import './formGroup.scss'

const FormGroupComponent = ({ 
    children, 
    endAdornment, 
    size = "default", 
    variant = 'default', 
    fullWidth = true, 
    className = '', 
    ...restProps
}) => {
    
    return (
        <div className={
                classNames(
                    {
                        'form__input_group': true,
                        '--full_width': fullWidth,
                        '--outlined': variant && variant === 'outlined',
                        '--small': size && size === 'small',
                    },
                    ...className.split(' ')
                )
            }
            {...restProps}
        >
            { children }
            { endAdornment }
        </div>
    )
}

export default FormGroupComponent
