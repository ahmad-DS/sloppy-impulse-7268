import React from "react";
import styles from "../Styles/Main.module.css";
import Rigthbar from "./Rigthbar";
import Sidebar from "./Sidebar";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.maininner}>
      <Sidebar></Sidebar>
<Rigthbar></Rigthbar>

      </div>
    </div>
  );
};

export default MainPage;
