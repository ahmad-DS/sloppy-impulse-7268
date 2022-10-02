import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../Components/UserNavbar";
import { getrequestdata } from "../../Redux/Appreducer/action";

import styles from "../Styles/Main.module.css";
import Rigthbar from "./PlanComp/Rigthbar";
import Sidebar from "./Sidebar";
const Weigth = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getrequestdata());
  }, [dispatch]);
  return (
    <>
      <UserNavbar />
      <div className={styles.container}>
        <div className={styles.maininner}>
          <Sidebar />
          <Rigthbar />
        </div>
      </div>
    </>
  );
};

export default Weigth;
