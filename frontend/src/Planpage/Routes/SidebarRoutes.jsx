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
    <Route path='/plan' element={<Weigth></Weigth>}></Route>
    <Route path='/plan/weigth' element={<Weigth></Weigth>}></Route>
    <Route path='/plan/carb' element={<Carb></Carb>}></Route>
    <Route path='/plan/exercise' element={<Exercise></Exercise>}></Route>
    <Route path='/plan/nutrient' element={<Nutrient></Nutrient>}></Route>
    <Route path='/plan/cycling' element={<Carb></Carb>}></Route>

   </Routes>
   </>
  )
}

export default SidebarRoutes