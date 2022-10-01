import React from 'react'
import Sidebar from '../Components/Sidebar'
import styles from "../Styles/nutrien.module.css"
import NutCom from './NutCom'

const Nutrient = () => {
  return (
    <div className={styles.container}>
    <div className={styles.maininner}>
      <Sidebar></Sidebar>
   <NutCom></NutCom>
    </div>
  </div>
  )
}

export default Nutrient