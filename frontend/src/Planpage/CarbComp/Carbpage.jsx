import React, { useState, useEffect } from "react";
import styles from "../Styles/Carbpage.module.css";
import {
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Progress,
} from "@chakra-ui/react";
import FooterPlan from "../Components/PlanComp/FooterPlan";
import Footer from "./Footer";

const Carbpage = () => {
  const [macros, setMacros] = useState({ carb: 0, protein: 0, fat: 0 });
  useEffect(() => {
    setMacros(JSON.parse(localStorage.getItem("macros")));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.maininner}>
        <div className={styles.individiv}>
          <h1>
            My macronutrient targets are providing{" "}
            <span> {localStorage.getItem("calsRequired") || 0} cals </span> per
            day:
          </h1>
          <Button backgroundColor={"white"} ml={"10px"}>
            Carbs {macros.carb}%
          </Button>
          <Button backgroundColor={"white"} ml={"10px"}>
            Protein {macros.protein}%
          </Button>
          <Button backgroundColor={"white"} ml={"10px"}>
            Fat {macros.fat}%
          </Button>
        </div>

        <div className={styles.progress}>
          <Button backgroundColor={"white"} ml={"10px"}>
            Carbs {macros.carb}%
          </Button>
          <Progress value={macros.carb} />
        </div>
        <div className={styles.progress}>
          <Button backgroundColor={"white"} ml={"10px"}>
            Protein {macros.protein}%
          </Button>
          <Progress value={macros.protein} />
        </div>
        <div className={styles.progress}>
          <Button backgroundColor={"white"} ml={"10px"}>
            Fat {macros.fat}%
          </Button>
          <Progress value={macros.fat} />
        </div>
        <FooterPlan />
        <Footer />
      </div>
    </div>
  );
};
export default Carbpage;
