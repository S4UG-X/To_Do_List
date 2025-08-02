import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BodyContent from '../components/BodyContent/BodyContent'
import { AuthContext } from '../Context/AuthContext'
import Dash from '../components/DashBoard/Dash'

const HomePage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  return (
    <div className="min-h-screen flex flex-col">
{/* <p>header</p>  */}

 
  <Navbar/>
  <div className="flex-1 p-4">

   {!isLoggedIn &&  <BodyContent/> }
   {isLoggedIn &&  <Dash/>}

  </div>

  <Footer/>


    </div>

  )
}

export default HomePage