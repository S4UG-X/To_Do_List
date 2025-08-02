import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BodyContent from '../components/BodyContent/BodyContent'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
{/* <p>header</p>  */}

 
  <Navbar/>
  <div className="flex-1 p-4">

    <BodyContent/>
  </div>

  <Footer/>


    </div>

  )
}

export default HomePage