import React from 'react'

import { ClientCard } from 'components'

import './cards.scss'

const Cards = ({ items = [] }) => {

    const itemsMapped = items.map(item => <ClientCard key={item.id} data={item} />)

    return (
        <section className="main__cards">
            <div className="wrapper">
                { itemsMapped || 'our search parameters did not match any partners. Please try different search.'}
            </div>
        </section>
    )
}

export default Cards
