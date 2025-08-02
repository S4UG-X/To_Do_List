import React, { useState } from 'react'
import TodoDemo from './ToDoDemo'
import HeroSection from './HeroSection'
import SignupPopup from '../SignupPopup'
import LoginPopup from '../LoginPopup'

const BodyContent = () => {
  const [currState, setCurrState] = useState(null)
  return (
    <div className='text-center'>
        
       <div>
        <div className="headContent ">
        {/* <i className="fa-light fa-dumbbell" style={{ backgroundColor: "#ea6666" }}></i> */}
        <i className="fa-regular fa-calendar-check text-9xl"></i>
       
            <h1 className='text-7xl font-semibold sm:text-8xl'>Conquer Your Day, <br /> With Clarity</h1>
            <p className='p-4 '>Stay organized, focused, and in control. Our simple yet powerful to‑do app helps you plan, prioritize, and finish what matters—without the clutter or distractions.</p>
        </div>

        <div>
            <button onClick={()=>setCurrState("signup")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-200 cursor-pointer">
              Try it for Free
            </button>
        </div>
        <br />
        {currState==="signup" && <SignupPopup setCurrState={setCurrState}/>}
        {currState === "login" && <LoginPopup setCurrState={setCurrState} />}
        
        <TodoDemo/>
        <HeroSection/>





       
       </div>


    </div>
  )
}

export default BodyContent