import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
{/* <p>header</p>  */}

 
  <Navbar/>
  <div className="flex-1 p-4">
    <p>body content</p>
  </div>

  <Footer/>


    </div>

  )
}

export default HomePage