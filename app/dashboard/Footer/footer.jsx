import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Script dev</div>
        <div className={styles.text}>&#169; All Right Reserve</div>
    </div>
  )
}

export default Footer;