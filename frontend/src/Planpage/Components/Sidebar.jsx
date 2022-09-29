import React from "react";
import styles from "../Styles/Sidebar.module.css";
import { Select } from "@chakra-ui/react";
const Sidebar = () => {
  return (
    <div className={styles.sidecontainer}>
      <div className={styles.div1}>
        <div className={styles.logo}>
          <img
            src="https://s3.amazonaws.com/img.mynetdiary.com/plan/weight_plan.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h1>Weigth & Calories</h1>
        </div>
      </div>
      <div className={styles.div1}>
        <div className={styles.logo}>
          <img
            src="https://s3.amazonaws.com/img.mynetdiary.com/plan/macros_plan.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h1>Carbs Protein & Fat </h1>
        </div>
      </div>
      <div className={styles.div1}>
        <div className={styles.logo}>
          <img
            src="https://s3.amazonaws.com/img.mynetdiary.com/plan/exercise_plan.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h1>Exercise Plan</h1>
        </div>
      </div>
      <div className={styles.div1}>
        <div className={styles.logo}>
          <img
            src="https://s3.amazonaws.com/img.mynetdiary.com/plan/nutr_plan.png"
            alt=""
          />
        </div>
        <div className={styles.optiontext}>
          <Select size="lg" variant="unstyled">
            <option value="My_Nutrient" className={styles.option}>
              My Nutrient
            </option>

            <option value="Common" className={styles.option}>
              Common
            </option>
            <option value="Vitamins" className={styles.option}>
              Vitamins
            </option>
            <option value="Omegas" className={styles.option}>
              Omegas
            </option>
            <option value="Minerals" className={styles.option}>
              Minerals
            </option>
          </Select>
        </div>
      </div>
      <div className={styles.div1}>
        <div className={styles.logo}>
          <img
            src="https://s3.amazonaws.com/img.mynetdiary.com/plan/cycling_plan.png"
            alt=""
          />
        </div>
        <div className={styles.text}>
          <h1>Cycling</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
