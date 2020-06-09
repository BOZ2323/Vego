import React from 'react'
import logo from './logo.png'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div><img className={styles.logo} src={logo} alt="logo"/>
        
        
        </div>
    )
}

export default Logo;