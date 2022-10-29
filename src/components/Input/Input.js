import React from 'react'
import classNames from 'classnames'

import './input.scss'

const InputComponent = React.forwardRef(({ className='', variant='default', fullWidth=false, size='default', onChange = () => false, ...restProps }, ref) => {

    return (
        <div className={
                classNames(
                    {
                        'form__input': true,
                        '--full-width': fullWidth,
                        '--outlined': variant && variant === 'outlined',
                        '--default': variant && variant === 'default',
                        '--small': size && size === 'small',
                    },
                    ...className.split(' ')
                )
            }
            {...restProps}
        >
            <input ref={ref} onChange={onChange} {...restProps} />
        </div>
    )
})

export default InputComponent
