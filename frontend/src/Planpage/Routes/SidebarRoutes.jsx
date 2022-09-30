import React from 'react'
import {Routes,Route} from "react-router-dom"
import Carb from '../CarbComp/Carb'
import Weigth from '../Components/Weigth'
import Exercise from '../Exercise/Exercise'

const SidebarRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Weigth></Weigth>}></Route>
    <Route path='/weigth' element={<Weigth></Weigth>}></Route>
    <Route path='/carb' element={<Carb></Carb>}></Route>
    <Route path='/exercise' element={<Exercise></Exercise>}></Route>
    <Route></Route>
    <Route path='/cycling' element={<Carb></Carb>}></Route>

   </Routes>
   </>
  )
}

export default SidebarRoutes