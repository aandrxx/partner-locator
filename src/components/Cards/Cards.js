import React from 'react'
import { useSelector } from 'react-redux'

import { ClientCard } from 'components'

import './cards.scss'

const locatorPartnerItemsSelector = state => state.partner_locator.items;
const locatorPartnerLoadingSelector = state => state.partner_locator.loading;
const locatorPartnerLoadedSelector = state => state.partner_locator.loaded;

const Cards = () => {
    const items = useSelector(locatorPartnerItemsSelector);
    const loading = useSelector(locatorPartnerLoadingSelector);
    const loaded = useSelector(locatorPartnerLoadedSelector);

    const itemsMapped = items.map(item => <ClientCard key={item.id} data={item} />)

    return (
        <section className="main__cards">
            <div className="wrapper">
                { !loaded && loading ? <div className="">Loading...</div> : '' }
                { !loaded && !loading ? <div className="">Something went wrong...</div> : '' }
                { loaded && !loading ? itemsMapped || 'Our search parameters did not match any partners. Please try different search.' : '' }
            </div>
        </section>
    )
}

export default Cards
