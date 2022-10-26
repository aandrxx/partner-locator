import React from 'react'

import './clientCard.scss'

const ClientCard = ({ data }) => {

    return (
        <div className="main__cards__client">
            <div className="main__cards__client__img">
                <img alt="{data.company}" src={ data.logo } />
            </div>
            <div className="main__cards__client__info">
                <h3>{ data.company }</h3>
                <p> { data.address } </p>
            </div>
            <div className="main__cards__client__contacts">
                <div>
                    <div className="main__cards__client__contacts_website">
                        <a href={ data.website } title={ data.company }>Website</a>
                    </div>
                    <div className="main__cards__client__contacts_phone">
                        { data.phone }
                    </div>
                </div>
                <div className="main__cards__client__contacts_status">
                    { data.status }
                </div>
            </div>
        </div>
    )
}

export default ClientCard
