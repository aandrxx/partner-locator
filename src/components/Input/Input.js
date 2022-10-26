import React from 'react'
import classNames from 'classnames'

import './input.scss'

const InputComponent = ({ className="", variant="default", ...restProps }) => {

    return (
        <div className={
                classNames(
                    {
                        'form__input': true,
                        '--outlined': variant && variant === 'outlined',
                        '--default': variant && variant === 'default',
                    },
                    ...className.split(' ')
                )
            }
            {...restProps}
        >
            <input {...restProps} />
        </div>
    )
}

export default InputComponent