import React from "react";
import styles from "../../Styles/Right.module.css";
import Modalcomp from "../Modals/Modalcomp";
import Daily from "../Modals/Daily";
import DateModal from "../Modals/DateModal";
import MinimiumCalorie from "../Modals/MinimiumCalorie";
import PersonalInfo from "../Modals/PersonalInfo";
import TargetModal from "../Modals/TargetModal";
import WeeklyRate from "../Modals/WeeklyRate";
import FooterPlan from "./FooterPlan";

import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Rigthbar = () => {
  const dailydata = useSelector((store) => store.Appreducer.data);
  let results;

  const [data, setData] = React.useState();
  React.useEffect(() => {
    results = localStorage.getItem("cal");
    setData(results);
  }, [data, dailydata]);
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <h1>
          I plan to maintain current weight by eating about
   
          <Button color={"green"}>{data}</Button>
        </h1>
      </div>
      <div className={styles.innercontainerdiv1}>
        <h1>Current Weight</h1>

        <Modalcomp />
      </div>
      <div className={styles.innercontainerdiv1}>
        <h1>Target Weight</h1>

        <TargetModal />
      </div>

      <div className={styles.innercontainerdiv1}>
        <h1>Target Date</h1>

        {/* <DateModal /> */}
      </div>
      <div className={styles.innercontainerdiv1}>
        <h1>Change Weekly Rate</h1>

        <WeeklyRate />
      </div>
      <div className={styles.innercontainerdiv1}>
        <h1> Daily Food Calorie Budget</h1>

        <Daily />
      </div>
      <div className={styles.innercontainerdiv1}>
        <h1> Minimum Calorie Budget</h1>

        <MinimiumCalorie />
      </div>

      <div className={styles.innercontainerdiv1}>
        <PersonalInfo />
      </div>

      <div className={styles.footer}>
        <FooterPlan />
      </div>
    </div>
  );
};

export default Rigthbar;
