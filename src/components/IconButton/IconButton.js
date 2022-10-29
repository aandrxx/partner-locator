import React from 'react'

import './iconButton.scss'

const IconButtonComponent = ({ onClick, icon }) => {

    return (
        <button onClick={onClick} className="form__icon-button">{ icon }</button>
    )
}

export default IconButtonComponent
