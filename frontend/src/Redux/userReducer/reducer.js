
// const initData={
// 	currDate:"",
// 	breakfast:"",
// 	lunch:"",
// 	dinner:"",
// 	snacks:"",
// 	exercise:"",
// 	steps:"",
// 	water:"",
// 	calorie:"2406"

import loadData from "../../utils/localStorage";

// }
const initData={
	totalCalories:loadData("totalCalories") || 0,
	caloriesRequired:loadData("calsRequired") || 0,
	breakfastCalories:loadData("breakfastCalories") || 0,
	lunchCalories:loadData("lunchCalories") || 0,
	dinnerCalories:loadData("dinnerCalories") || 0,
	snackCalories:loadData("snackCalories") || 0,

}

export default initData