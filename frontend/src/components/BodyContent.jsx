import React from 'react'
import TodoDemo from './BodyContent/ToDoDemo'
import HeroSection from './BodyContent/HeroSection'

const BodyContent = () => {
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-200 cursor-pointer">
              Try it for Free
            </button>
        </div>

        
        <TodoDemo/>
        <HeroSection/>


<hr />
        heading 
        try tracker free button
        Features of your app
       </div>


    </div>
  )
}

export default BodyContent