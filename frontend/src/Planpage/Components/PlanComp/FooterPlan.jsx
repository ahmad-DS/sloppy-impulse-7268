import React from "react";
import styles from "../../Styles/Right.module.css";
const FooterPlan = () => {
  return (
    <div className={styles.footerdiv}>
      <div className={styles.footercontainer}>
        <h1 >Calories in Example Foods</h1>
        <div className={styles.footerimage}>
          <div className={styles.imagedivfooter}>
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/nutrients_png/chicken_breast.png"
              alt=""
            />
            <h1>Chicken breast</h1>
            <h2>100 g</h2>
            <h3>~20 g of proteins</h3>
          </div>
          <div className={styles.imagedivfooter}>
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/nutrients_png/tuna.png"
              alt=""
            />
            <h1>Orange Juice</h1>
            <h2>100 g</h2>
            <h3>~20 g</h3>
          </div>
          <div className={styles.imagedivfooter}>
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/nutrients_png/lentils.png"
              alt=""
            />
            <h1>Ice Cream</h1>
            <h2>100 g</h2>

            <h3>~25 g</h3>
          </div>
        </div>
        <div className={styles.footerpara}>
<h3>About Proteins</h3>
<p>The default goal is 20% Calories. Protein is found in both plant and animal foods. Animal sources are “complete proteins” - that is, they provide all of the essential amino acids needed to build and repair proteins in the human body. Plant sources of protein are loaded with dietary fiber and essential vitamins and minerals, but they are generally less digestible and low in one or more essential amino acids. Eating a variety of plant proteins will insure that enough of each essential amino acid is consumed. Some plant foods are particularly high in protein, such as soy, dried beans and peas, nuts, and seeds.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPlan;
