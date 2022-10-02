import React from "react";
import RecipeModal from "./RecipeModal";
import { useState } from "react";
// import { premiumData } from "../../Data/recipies";

const PremiumRecipes = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const premiumData = [
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Warm Summer Vegetable Salad",
      ingredients: [
        { name: "Canola oil" },
        { name: "Onions green spring or scallions raw" },
        { name: "Zucchini raw" },
        { name: "Peppers sweet red raw" },
        { name: "Peppers jalapeno raw" },
        { name: "Corn sweet yellow raw" },
        { name: "Black beans canned no salt added" },
        { name: "Garlic raw" },
        { name: "Cilantro or coriander leaves fresh or raw herb" },
        { name: "Table Salt Iodized" },
        { name: "Pepper black" },
      ],
      boost: 7009928,
      id: 11985403,
      singleServingCalories: "176",
      imagePreview: {
        leftMargin: 0,
        topMargin: 0,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/11985403.jpg",
        sizeFactor: 1.001,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Healthy Eggplant Parmesan with Mushrooms",
      ingredients: [
        { name: "Eggplant raw" },
        { name: "Vegetable cooking spray oil" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Onions raw" },
        { name: "Italian seasoning dried" },
        { name: "Table Salt Iodized" },
        { name: "Pepper black" },
        { name: "Mushrooms white raw" },
        { name: "Garlic raw" },
        { name: "Tomato sauce canned no salt added" },
        { name: "Mozzarella cheese part skim low moisture" },
        { name: "Parmesan cheese grated" },
      ],
      boost: 7008773,
      id: 11986497,
      singleServingCalories: "233",
      imagePreview: {
        leftMargin: -28,
        topMargin: -29,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/11986497.jpg",
        sizeFactor: 1.5418320493066253,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Lighter Roasted Kale",
      ingredients: [
        { name: "Kale raw" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Soy sauce reduced sodium" },
      ],
      boost: 7006835,
      id: 11988733,
      singleServingCalories: "157",
      imagePreview: {
        leftMargin: -26,
        topMargin: -28,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/11988733.jpg",
        sizeFactor: 1.4935373134328356,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "No Yolks Florentine Omelet",
      ingredients: [
        { name: "Olive or extra virgin olive oil" },
        { name: "Onions raw" },
        { name: "Mushrooms white raw" },
        { name: "Spinach all varieties raw" },
        { name: "Egg white raw" },
        { name: "Pepper black" },
      ],
      boost: 7002959,
      id: 11989088,
      singleServingCalories: "135",
      imagePreview: {
        leftMargin: 0,
        topMargin: 0,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/11989088.jpg",
        sizeFactor: 1.001,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Cabbage & Beef Casserole",
      ingredients: [
        { name: "Cabbage raw" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Beef ground 93% lean 7% fat raw" },
        { name: "Onions raw" },
        { name: "Garlic raw" },
        { name: "Thyme dried" },
        { name: "Paprika smoked or Hungarian" },
        { name: "Pepper black" },
        { name: "Table Salt Iodized" },
        { name: "Tomatoes diced canned no salt added" },
        { name: "Tomato sauce canned no salt added" },
        { name: "Canola oil" },
        { name: "Rice brown medium grain cooked without salt" },
        { name: "Mozzarella cheese part skim low moisture" },
      ],
      boost: 7009118,
      id: 12153487,
      singleServingCalories: "264",
      imagePreview: {
        leftMargin: -7,
        topMargin: -11,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12153487.jpg",
        sizeFactor: 1.177470588235294,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Kale and Cheese Omelet with Egg Substitute",
      ingredients: [
        { name: "Olive or extra virgin olive oil" },
        { name: "Onions raw" },
        { name: "Kale raw" },
        { name: "Egg substitute liquid or frozen fat free" },
        { name: "Mozzarella cheese part skim low moisture" },
      ],
      boost: 7002910,
      id: 12167354,
      singleServingCalories: "200",
      imagePreview: {
        leftMargin: -4,
        topMargin: -8,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12167354.jpg",
        sizeFactor: 1.0879565217391303,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Simple Mediterranean Chickpea Salad",
      ingredients: [
        { name: "Chickpeas or garbanzo beans canned no salt added" },
        { name: "Garlic raw" },
        { name: "Parsley fresh or raw herb" },
        { name: "Onions raw" },
        { name: "Tomatoes red raw" },
        { name: "Peppers sweet green raw" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Lemon juice raw" },
      ],
      boost: 7017059,
      id: 12231254,
      singleServingCalories: "360",
      imagePreview: {
        leftMargin: -11,
        topMargin: -17,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12231254.jpg",
        sizeFactor: 1.2355679012345677,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Delicious Quinoa with Blackberries and Walnuts",
      ingredients: [
        { name: "Quinoa uncooked" },
        { name: "Milk nonfat skim or fat free" },
        { name: "Water" },
        { name: "Blackberries raw" },
        { name: "Cinnamon ground" },
        { name: "Walnuts raw" },
        { name: "Agave syrup" },
      ],
      boost: 7000909,
      id: 12231705,
      singleServingCalories: "326",
      imagePreview: {
        leftMargin: -40,
        topMargin: -44,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12231705.jpg",
        sizeFactor: 1.819181818181818,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "serving",
      name: "Pecan-Crusted Chicken",
      ingredients: [
        { name: "Mustard dijon" },
        { name: "Honey" },
        { name: "Chicken breast boneless skinless raw" },
        { name: "Pecans raw" },
        { name: "Vegetable cooking spray oil" },
      ],
      boost: 7001732,
      id: 12362599,
      singleServingCalories: "437",
      imagePreview: {
        leftMargin: -13,
        topMargin: -21,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12362599.jpg",
        sizeFactor: 1.2668227848101263,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "serving",
      name: "Turkey Squash Hash",
      ingredients: [
        { name: "Onions raw" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Turkey ground 99% lean 1% fat raw" },
        { name: "Squash summer all types raw" },
        { name: "Water" },
        { name: "Pepper black" },
        { name: "Sea salt non-iodized" },
      ],
      boost: 7001763,
      id: 12369258,
      singleServingCalories: "179",
      imagePreview: {
        leftMargin: -10,
        topMargin: -15,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12369258.jpg",
        sizeFactor: 1.213121212121212,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "serving",
      name: "Energy Trail Mix",
      ingredients: [
        { name: "Almonds" },
        { name: "Cashews raw" },
        { name: "Raisins golden seedless" },
        { name: "Currants zante dried" },
        { name: "Pumpkin seed kernels (shelled) dried" },
        { name: "Blueberries dried sweetened" },
      ],
      boost: 7009466,
      id: 12383132,
      singleServingCalories: "140",
      imagePreview: {
        leftMargin: -16,
        topMargin: -22,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12383132.jpg",
        sizeFactor: 1.3343333333333331,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "serving",
      name: "Moroccan Meatballs in Tomato Sauce",
      ingredients: [
        { name: "Onions raw" },
        { name: "Garlic raw" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Spices anise seed" },
        { name: "Ginger ground dry" },
        { name: "Onion powder" },
        { name: "Pepper black" },
        { name: "Cinnamon ground" },
        { name: "Pepper white" },
        { name: "Paprika" },
        { name: "Cumin seed ground or whole" },
        { name: "Coriander seed ground or whole dried" },
        { name: "Table Salt Iodized" },
        { name: "Beef ground 95% lean 5% fat raw" },
        { name: "Tomato sauce canned no salt added" },
      ],
      boost: 7022177,
      id: 12383575,
      singleServingCalories: "226",
      imagePreview: {
        leftMargin: -21,
        topMargin: -25,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12383575.jpg",
        sizeFactor: 1.4295714285714285,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "serving",
      name: "Slow Cooker Apple Cinnamon Pork Loin",
      ingredients: [
        { name: "Onions raw" },
        { name: "Garlic raw" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Apples with skin raw" },
        { name: "Water" },
        { name: "Flour white all purpose" },
        { name: "Orange juice raw" },
        { name: "Curry powder" },
        { name: "Chicken broth or bouillon dry powder" },
        { name: "Ginger ground dry" },
        { name: "Cinnamon ground" },
        { name: "Table Salt Iodized" },
        { name: "Raisins seedless" },
        { name: "Pork fresh loin tenderloin separable lean only raw" },
      ],
      boost: 7000551,
      id: 12405991,
      singleServingCalories: "180",
      imagePreview: {
        leftMargin: -11,
        topMargin: -19,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12405991.jpg",
        sizeFactor: 1.2668227848101263,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "serving",
      name: "Garlic Chili Baked Salmon",
      ingredients: [
        { name: "Salmon coho wild raw" },
        { name: "Walnut oil" },
        { name: "Chili flakes or crushed red pepper spice" },
        { name: "Table Salt Iodized" },
        { name: "Pepper black" },
        { name: "Garlic powder" },
        { name: "Dill weed dried" },
      ],
      boost: 7015906,
      id: 12409611,
      singleServingCalories: "197",
      imagePreview: {
        leftMargin: -16,
        topMargin: -25,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/12409611.jpg",
        sizeFactor: 1.2896597938144327,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "serving",
      name: "Buckwheat Onion Mushroom and Egg Bowl",
      ingredients: [
        { name: "Olive or extra virgin olive oil" },
        { name: "Onions raw" },
        { name: "Mushrooms white raw" },
        { name: "Cabbage red raw" },
        { name: "Egg whole raw" },
        { name: "Buckwheat groats or kasha cooked without salt" },
      ],
      boost: 7000675,
      id: 21872053,
      singleServingCalories: "329",
      imagePreview: {
        leftMargin: -32,
        topMargin: -40,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/21872053.jpg",
        sizeFactor: 1.6676666666666666,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Slow Cooker Sicilian Spaghetti Sauce with Beef & Italian Sausage",
      ingredients: [
        { name: "Tomato sauce canned no salt added" },
        { name: "Tomato paste canned" },
        { name: "Water" },
        { name: "Sugar white" },
        { name: "Table Salt Iodized" },
        { name: "Parsley dried" },
        { name: "Basil dried" },
        { name: "Oregano dried" },
        { name: "Fennel seed ground or whole" },
        { name: "Onions raw" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Peppers sweet green raw" },
        { name: "Mushrooms white raw" },
        { name: "Garlic raw" },
        { name: "Beef ground 93% lean 7% fat raw" },
        { name: "Pork sausage Italian raw" },
      ],
      boost: 7011329,
      id: 21878753,
      singleServingCalories: "274",
      imagePreview: {
        leftMargin: -18,
        topMargin: -27,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/21878753.jpg",
        sizeFactor: 1.37086301369863,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "serving",
      name: "Simple Egg White Omelet with Veggies and Cheese",
      ingredients: [
        { name: "Vegetable cooking spray oil" },
        { name: "Onions green spring or scallions raw" },
        { name: "Mushrooms white raw" },
        { name: "Peppers sweet green raw" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Egg white raw" },
        { name: "Milk nonfat skim or fat free" },
        { name: "Parmesan cheese grated" },
      ],
      boost: 7041965,
      id: 21878760,
      singleServingCalories: "232",
      imagePreview: {
        leftMargin: -16,
        topMargin: -24,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/21878760.jpg",
        sizeFactor: 1.322003963011889,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Chicken and Vegetable Fried Rice",
      ingredients: [
        { name: "Rice brown medium grain cooked without salt" },
        { name: "Canola oil" },
        { name: "Onions green spring or scallions raw" },
        { name: "Peas and carrots frozen unprepared" },
        { name: "Garlic raw" },
        { name: "Ginger root raw" },
        { name: "Sesame oil" },
        { name: "Hoisin Sauce" },
        { name: "Soy sauce reduced sodium" },
        { name: "Vinegar rice" },
        { name: "Chicken breast roasted meat only skinless" },
      ],
      boost: 7124831,
      id: 21878861,
      singleServingCalories: "314",
      imagePreview: {
        leftMargin: -32,
        topMargin: -38,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/21878861.jpg",
        sizeFactor: 1.6676666666666666,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Slow Cooker Cincinnati Turkey Chili",
      ingredients: [
        { name: "Pinto beans canned no salt added" },
        { name: "Tomatoes diced canned no salt added" },
        { name: "Tomato paste canned" },
        { name: "Chicken broth reduced sodium canned" },
        { name: "Chili powder" },
        { name: "Cumin seed ground or whole" },
        { name: "Oregano dried" },
        { name: "Cinnamon ground" },
        { name: "Allspice ground" },
        { name: "Table Salt Iodized" },
        { name: "Olive or extra virgin olive oil" },
        { name: "Onions raw" },
        { name: "Peppers sweet green raw" },
        { name: "Garlic raw" },
        { name: "Turkey ground 93% lean 7% fat raw" },
        { name: "Dark chocolate 70-85% cacao" },
        { name: "Cheddar cheese" },
      ],
      boost: 7003224,
      id: 21878863,
      singleServingCalories: "345",
      imagePreview: {
        leftMargin: -33,
        topMargin: -39,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/21878863.jpg",
        sizeFactor: 1.6676666666666666,
      },
      favorite: false,
      singleServing: "serving",
    },
    {
      premium: true,
      system: true,
      rawSingleServing: "servings",
      name: "Sweet Potato & Ground Turkey Skillet",
      ingredients: [
        { name: "Olive or extra virgin olive oil" },
        { name: "Turkey ground 93% lean 7% fat raw" },
        { name: "Onions raw" },
        { name: "Peppers sweet red raw" },
        { name: "Garlic raw" },
        { name: "Sweet potato raw" },
        { name: "Chili flakes or crushed red pepper spice" },
        { name: "Table Salt Iodized" },
        { name: "Pepper black" },
        { name: "Mozzarella cheese part skim low moisture" },
        { name: "Parsley fresh or raw herb" },
      ],
      boost: 7005709,
      id: 21878864,
      singleServingCalories: "357",
      imagePreview: {
        leftMargin: -23,
        topMargin: -31,
        imageSrc:
          "https://s3.amazonaws.com/img.mynetdiary.com/PremiumRecipePictures/preview/21878864.jpg",
        sizeFactor: 1.5394615384615382,
      },
      favorite: false,
      singleServing: "serving",
    },
  ];

  const handleModal = (id) => {
    setOpen(!open);
    const Data = premiumData.filter((elem) => elem.id === id);
    setModalData(...Data);
    // console.log(Data);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      {premiumData.map((data, index) => {
        return (
          <div key={index} style={{ padding: "1rem", borderRadius: "10px" }}>
            <button
              onClick={async () => {
                handleModal(data.id);
              }}
            >
              <div>
                <div style={{ position: "relative" }}>
                  <img
                    style={{ borderRadius: "10px" }}
                    src={data.imagePreview.imageSrc}
                    width="100%"
                    alt=""
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "80%",
                      left: "0px",
                      color: "white",
                      padding: "0 20px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "3fr 1fr",
                        lineHeight: "1.15",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {data.name}
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                          {data.singleServingCalories}
                        </div>
                        <div>
                          <div>cals/</div>
                          <div>serving</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            {/* <Modal
              size="5xl"
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={() => {
                onClose();
                setOpen(!open);
              }}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                      }}
                    >
                      <div>
                        <img src={data.imagePreview.imageSrc} alt="" />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "space-between",
                          justifyContent: "space-between",
                          padding: "1rem",
                        }}
                      >
                        <div>
                          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                            {data.name}
                          </h2>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                          }}
                        >
                          <div>
                            <h4
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              6 serving
                            </h4>
                            <h2>total</h2>
                          </div>
                          <div>
                            <h4
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              8 min
                            </h4>
                            <h2>prep</h2>
                          </div>
                          <div>
                            <h4
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              6 min
                            </h4>
                            <h3>cooking</h3>
                          </div>
                          <div>
                            <h4
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              {data.singleServingCalories} g
                            </h4>
                            <h3>recipe weight</h3>
                          </div>
                          <div style={{ color: "green" }}>
                            <h4
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              {data.singleServingCalories}
                            </h4>
                            <h3>cals / {data.singleServing}</h3>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>FOOD LABEL</div>
                          <div>COPY & CUSTOMIZE 🔒</div>
                          <div>Print 🔒</div>
                          <div>
                            <Button colorScheme="whatsapp">LOG 🔒</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <div>
                        <ul style={{ listStyle: "none" }}>
                          {data.ingredients.map((item, index) => (
                            <li style={{ margin: "0.5rem" }} key={index}>
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3>6 Steps 🔒</h3>
                        <SkeletonText mt="8" noOfLines={6} spacing="8" />
                      </div>
                    </div>
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
            {open && (
              <RecipeModal data={modalData} open={open} close={handleModal} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PremiumRecipes;
