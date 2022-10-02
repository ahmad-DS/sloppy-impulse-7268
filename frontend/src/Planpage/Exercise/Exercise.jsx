import React from "react";
import UserNavbar from "../../Components/UserNavbar";
import Sidebar from "../Components/Sidebar";
import styles from "../Styles/exercise.module.css";
import ExeRigth from "./ExeRigth";
const Exercise = () => {
  return (
    <>
    <UserNavbar/>
    <div className={styles.container}>
      <div className={styles.maininner}>
        <Sidebar/>
        <ExeRigth />
      </div>
    </div>
    </>
  );
};

export default Exercise;
