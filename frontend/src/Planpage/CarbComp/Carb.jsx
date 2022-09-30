import React from 'react'
import styles from "../Styles/Carb.module.css"
import Carbpage from "./Carbpage"
import Sidebar from "../Components/Sidebar"
const Carb = () => {
  return (
    <div className={styles.container}>
<div  className={styles.maininner}>
<Sidebar></Sidebar>
<Carbpage/>
</div>


    </div>
  )
}

export default Carb