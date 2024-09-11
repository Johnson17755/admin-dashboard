import React from 'react'
import Card from '../Ui/dashboard/card/card';
import styles from "../Ui/dashboard/dashboard.module.css"
import Rightbar from '../Ui/dashboard/rightbar/rightbar';
import Transaction from '../Ui/dashboard/transactions/transaction';
import Chart from '../Ui/dashboard/chart/chart';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
      <Transaction />
      <Chart />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard;