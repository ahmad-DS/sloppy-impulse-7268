import React from "react";
import { useSelector } from "react-redux";
import styles from "../Styles/nutcomp.module.css";

const NutCom = () => {
 
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer1}>
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

      {/*                     */}
      <div className={styles.innercontainer}>
        <h1>Food Grade</h1>
        <h2>I plan to maintain current weight by eating about daily.</h2>
      </div>

      <div className={styles.innercontainer}>
        <h1>Fat Components</h1>
        <h3 style={{color:"green"}}>Saturated Fat</h3>
        <h2>A diet too high in saturated fat can increase your risk of cardiovascular disease.</h2>
      </div>

      <div className={styles.innercontainer}>
        <h1>Trans Fat</h1>

        <h2>Trans fats (from partially hydrogenated oils) raise bad cholesterol in your blood. Limit to 0g daily.</h2>
      </div>

      <div className={styles.innercontainer}>
        <h1>Sodium</h1>

        <h2>Too much sodium from any source can raise blood pressure.</h2>
      </div>



      <div className={styles.innercontainer}>
        <h3 style={{color:"green"}}>Carbs-related</h3>
        <h1>Dietary Fiber</h1>
        <h2>Provides multiple health benefits, high in plant foods.</h2>
        
      </div>

      <div className={styles.innercontainer}>
        <h3 style={{color:"green"}}>Minerals</h3>
        <h1>Calcium</h1>
        <h2>Needed for healthy bones, teeth, muscle contraction, blood clotting, heart rhythm, and blood pressure control. 1,000mg recommended.</h2>
        
      </div>

      <div className={styles.innercontainer1}>
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
      <div className={styles.innercontainer1}>
       
        
      </div>
    </div>
  );
};

export default NutCom;
