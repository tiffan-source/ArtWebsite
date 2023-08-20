import React from 'react'
import Header from '../components/home/Header'
import Exposure from '../components/home/Exposure'

function Home() {
  return (
    <div>
        <Header/>
        <div className='text-center text-xl text-secondary mt-5'>Current  Exhibition</div>
        <Exposure/>
    </div>
  )
}

export default Home