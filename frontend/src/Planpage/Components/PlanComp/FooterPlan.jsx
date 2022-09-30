import React from "react";
import styles from "../../Styles/Right.module.css";
const FooterPlan = () => {
  return (
    <div className={styles.footerdiv}>
      <div className={styles.footercontainer}>
        <h1>Calories in Example Foods</h1>
        <div className={styles.footerimage}>
          <div className={styles.imagedivfooter}>
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/nutrients_png/olive_oil.png"
              alt=""
            />
            <h1>Olive oil</h1>
            <h2>100 ml</h2>
            <h3>~880cals</h3>
          </div>
          <div className={styles.imagedivfooter}>
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/nutrients_png/orange_juice.png"
              alt=""
            />
            <h1>Orange Juice</h1>
            <h2>100 ml</h2>
            <h3>~45cals</h3>
          </div>
          <div className={styles.imagedivfooter}>
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/nutrients_png/ice_cream.png"
              alt=""
            />
            <h1>Ice Cream</h1>
            <h2>100 g</h2>

            <h3>~250cals</h3>
          </div>
        </div>
        <div className={styles.footerpara}>
<h3>About Calories</h3>
<p>Calories measure the amount of energy we consume from foods and beverages and the amount we burn from basal metabolism (at complete rest), thermogenesis (to digest and process food), and physical activity. To lose weight, calories intake must be less than calories burned. To gain weight, calories intake must be more than calories burned. To maintain weight, calories intake needs to match calories burned.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPlan;
