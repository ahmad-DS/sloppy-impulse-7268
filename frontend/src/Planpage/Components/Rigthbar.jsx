import React from 'react'
import styles from "../Styles/Right.module.css"
import Modalcomp from './Modalcomp'
const Rigthbar = () => {
  return (
    <div className={styles.container}>
<div className={styles.innercontainer}>
 
<h1>  I plan to maintain current weight by eating about <Modalcomp/> daily.</h1>

</div>
    </div>
  )
}

export default Rigthbar