import React from 'react'
import styles from './transactions.module.css';
import Image from 'next/image';

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" 
                  alt="noavatar" 
                  width={40} 
                  height={40} 
                  className={styles.userImage} />
                  Victor Amadi
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>Pending</span>
              </td>
              <td>01.06.2024</td>
              <td>$5.500</td>
            </tr>

            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" 
                  alt="noavatar" 
                  width={40} 
                  height={40} 
                  className={styles.userImage} />
                  Johnson squ
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.done}`}>Done</span>
              </td>
              <td>01.06.2024</td>
              <td>$5.500</td>
            </tr>

            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" 
                  alt="noavatar" 
                  width={40} 
                  height={40} 
                  className={styles.userImage} />
                  Script rew
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
              </td>
              <td>01.06.2024</td>
              <td>$5.500</td>
            </tr>

            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" 
                  alt="noavatar" 
                  width={40} 
                  height={40} 
                  className={styles.userImage} />
                  Victor Amadi
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>Pending</span>
              </td>
              <td>01.06.2024</td>
              <td>$5.500</td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}

export default Transaction;