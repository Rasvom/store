import React from 'react'
import styles from "./Header.module.css"
import Logo from './Logo'
import CartIcon from './CartIcon'

const Header = () => {
  return (
    <div className={styles.header}>
        <Logo/>
        <CartIcon/>
    </div>
  )
}

export default Header
