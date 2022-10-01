import React from 'react'
import Articles from '../HomePage/articles/Articles'
import Compatible from '../HomePage/compatible/Compatible'
import Counter from '../HomePage/Counter/Counter'
import Footer from '../HomePage/footer/Footer'
import LowerSection from '../HomePage/lowersection/LowerSection'
import Succeed from '../HomePage/succeed/Succeed'
import StorySlider from '../HomePage/SuccessStory/StorySlider'
import UpperSection from '../HomePage/uppersection/UpperSection'
import WomenHelthSection from '../HomePage/womenhealth/WomenHelthSection'
import HomeNavbar from './HomeNavbar'

const Home = () => {
  return (
    <div>
      <HomeNavbar/>
      <UpperSection/>
      <WomenHelthSection/>
      <Succeed/>
      <Counter/>
      <StorySlider/>
      <Articles/>
      <Compatible/>
      <LowerSection/>
      <Footer/>
    </div>
  )
}

export default Home