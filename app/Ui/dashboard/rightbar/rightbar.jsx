import React from 'react'
import styles from './rightbar.module.css';
import Image from 'next/image';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="astronaur" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>Creating Admin Dashboard is great</h3>
          <span className={styles.subtitle}>Takes a whole week to build</span>
          <p className={styles.desc}>building Admin Dash board is quite good keeping up to recent trends 😘</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="astronaur" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>Keeping up to recent treand is quit challeging</h3>
          <span className={styles.subtitle}>Boots your productivity</span>
          <p className={styles.desc}>building Admin Dash board is quite good keeping up to recent trends 😘</p>
          <button className={styles.button}>
            <MdReadMore />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
};

export default Rightbar;