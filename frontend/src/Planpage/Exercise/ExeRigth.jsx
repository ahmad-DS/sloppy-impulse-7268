import React from "react";
import styles from "../Styles/exe.module.css";
import Modalcomp from "../Components/Modals/Modalcomp";
import PercentModal from "./Modal/PercentModal";

const ExeRigth = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <h1>
          I plan to maintain current weight by eating about <Modalcomp /> daily.
        </h1>
      </div>
      <div className={styles.innercontainer}>
        <div className={styles.imagediv}>
          <div>
            <img
              src="https://www.mynetdiary.com/img/mui/subscription_icon.png"
              alt=""
            />
          </div>
          <div>
            <h1>Available In Premium</h1>
          </div>
        </div>
        </div>
        <div className={styles.innercontainer}>
          <h4>
            You can plan your diet more accurately by including extra exercise
            you do during the week, to eat a bit more for extra exercise. Some
            days you exercise, some you don't, but you should always strive to
            meet your weekly calorie goals balancing eating and exercise. Weekly
            Analysis screen can help you see where you are for the week.
          </h4>
      
      </div>

      <div className={styles.innercontainer}>
          <h2>
          Only additional exercise above Sedentary activity level should be included into this weekly exercise plan!
          </h2>
      
      </div>
    
      <div className={styles.innercontainer}>
          <h2>
          Exercise Macros Increase, %
          </h2>
 <PercentModal/>
      </div>
      <div className={styles.innercontainer}>
          <h2>
          Calories burned during exercise will increase day's calorie budget and day's macros targets using the same macros distribution that is in effect for the day. You can customize macros distribution and calories.
          </h2>

      </div>
     
    </div>
  );
};

export default ExeRigth;
