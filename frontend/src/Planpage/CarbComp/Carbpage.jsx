import React from "react";
import styles from "../Styles/Carbpage.module.css";
import {
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

const Carbpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.maininner}>
        <div className={styles.individiv}>
          <h1>
            My macronutrient targets are providing <span> 2,370 cals </span> per
            day:
          </h1>
          <Button backgroundColor={"white"} ml={"10px"}>
            Carbs 45%
          </Button>
          <Button backgroundColor={"white"} ml={"10px"}>
            Protein 20%
          </Button>
          <Button backgroundColor={"white"} ml={"10px"}>
            Fat 35%
          </Button>
        </div>

        <div className={styles.progress}>
          <Button backgroundColor={"white"} ml={"10px"}>
            Carbs 45%
          </Button>
          <Slider aria-label="slider-ex-2" colorScheme="blue" defaultValue={45}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div className={styles.progress}>
          <Button backgroundColor={"white"} ml={"10px"}>
            Protein 20%
          </Button>
          <Slider aria-label="slider-ex-2" colorScheme="blue" defaultValue={20}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div className={styles.progress}>
          <Button backgroundColor={"white"} ml={"10px"}>
            Fat 35%
          </Button>
          <Slider
            aria-label="slider-ex-2"
            colorScheme="blue"
            defaultValue={35}
            onChangeEnd={(val) => console.log(val)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Carbpage;
