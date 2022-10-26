import React from 'react'
import './header.scss'

const Header = ({ children }) => {

  return (
    <header className="main__header">
        { children }
    </header>
  )
}

export default Header