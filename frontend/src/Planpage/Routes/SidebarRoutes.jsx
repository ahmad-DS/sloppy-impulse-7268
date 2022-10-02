import React from 'react'
import {Routes,Route} from "react-router-dom"
import Carb from '../CarbComp/Carb'
import Weigth from '../Components/Weigth'
import Exercise from '../Exercise/Exercise'
import Nutrient from '../Nutrient/Nutrient'

const SidebarRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/user/plan' element={<Weigth/>}></Route>
    <Route path='/user/plan/weigth' element={<Weigth/>}></Route>
    <Route path='/user/plan/carbs' element={<Carb/>}></Route>
    <Route path='/user/plan/exercise' element={<Exercise/>}></Route>
    <Route path='/user/plan/nutrient' element={<Nutrient/>}></Route>
    <Route path='/user/plan/cycling' element={<Carb/>}></Route>

   </Routes>
   </>
  )
}

export default SidebarRoutes