import React from "react";
import Sidebar from "../Components/Sidebar";
import styles from "../Styles/exercise.module.css";
import ExeRigth from "./ExeRigth";
const Exercise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.maininner}>
        <Sidebar></Sidebar>
        <ExeRigth />
      </div>
    </div>
  );
};

export default Exercise;
