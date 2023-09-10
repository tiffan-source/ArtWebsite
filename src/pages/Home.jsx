import React from 'react'
import Header from '../components/home/Header'
import Exposure from '../components/home/Exposure'
import Contact from '../components/Contact'
import Events from '../components/home/Events'

function Home() {
  return (
    <div>
      <Header />
      <div className='text-center text-xl text-secondary my-5 md:mb-0'>Current  Exhibition</div>
      <Exposure />
      <Events />
      <Contact />
    </div>
  )
}

export default Home