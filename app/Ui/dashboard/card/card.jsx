import React from 'react'
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>7.899</span>
        <span className={styles.detail}> 
          <span className={styles.positive}>15%</span> More than previous sales</span>
      </div>
    </div>
  )
}

export default Card;