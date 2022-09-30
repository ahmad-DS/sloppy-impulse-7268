import React from 'react'
import {Routes,Route} from "react-router-dom"
import Carb from '../CarbComp/Carb'
import Weigth from '../Components/Weigth'

const SidebarRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Weigth></Weigth>}></Route>
    <Route path='/weigth' element={<Weigth></Weigth>}></Route>
    <Route path='/carb' element={<Carb></Carb>}></Route>
    <Route></Route>
    <Route></Route>
    <Route></Route>

   </Routes>
   </>
  )
}

export default SidebarRoutes