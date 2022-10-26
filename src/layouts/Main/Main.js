import React from 'react'
import { Header, Logo } from './components'

const MainLayout = ({ children }) => {

  return (
    <main className="main">
        <Header>
            <Logo />
        </Header>
        { children }
    </main>
  )
}

export default MainLayout
