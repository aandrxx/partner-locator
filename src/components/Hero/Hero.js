import React from 'react'
import { SearchForm } from 'components'

import './hero.scss'

const Hero = () => {

    return (
        <section className="main__hero">
            <div>
                <h1>Netwrix Partner Locator</h1>
                <p>
                    Hundreds of Netwrix partners around the world are standing by to help you. 
                    <br/> 
                    With our Partner Locator you can easily find the list of authorized partners in your area.
                </p>
            </div>
            <SearchForm />
        </section>
    )
}

export default Hero
