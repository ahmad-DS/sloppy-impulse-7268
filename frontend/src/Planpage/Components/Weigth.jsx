import React from "react";

import styles from "../Styles/Main.module.css";
import Rigthbar from "./PlanComp/Rigthbar";
import Sidebar from "./Sidebar";
const Weigth = () => {
  return (
    <div className={styles.container}>
      <div className={styles.maininner}>
        <Sidebar></Sidebar>
        <Rigthbar></Rigthbar>
      </div>
    </div>
  );
};

export default Weigth;
