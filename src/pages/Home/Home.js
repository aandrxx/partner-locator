import React from 'react'
import { connect } from 'react-redux'

import { Main } from 'layouts'
import { Cards, Hero } from 'components'

const mapStateToProps = ({ partner_locator }) => ({
    items: partner_locator.items,
    loading: partner_locator.loading,
    loaded: partner_locator.loaded
})

const HomePage = ({ items = [] }) => {
    
    return (
        <Main>
            <Hero />
            <Cards items={items} />
        </Main>
    )
}

export default connect(mapStateToProps)(HomePage)
