import React from "react";
import { useDispatch, useSelector } from "react-redux";
import getrequestdata from "../../Redux/Appreducer/action";

import styles from "../Styles/Main.module.css";
import Rigthbar from "./PlanComp/Rigthbar";
import Sidebar from "./Sidebar";
const Weigth = () => {
  const dispatch=useDispatch()



  React.useEffect(()=>{
dispatch(getrequestdata())

  },[])
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
