import React from 'react'
import Navbar from '../Ui/dashboard/navbar/navbar'
import Sidebar from '../Ui/dashboard/sidebar/sidebar'
import styles from '../Ui/dashboard/dashboard.module.css' 
import Footer from './Footer/footer'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default Layout;