import React from 'react'

import './iconButton.scss'

const IconButtonComponent = ({ icon }) => {

    return (
        <button className="form__icon-button">{ icon }</button>
    )
}

export default IconButtonComponent
