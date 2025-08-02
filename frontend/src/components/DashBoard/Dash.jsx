import React from 'react'
import TaskLogic from './TaskLogic'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Dash = () => {
  return (
    <div>
        <Navbar/>

<div className='min-h-[80vh]'>

<TaskLogic/>

</div>
    <Footer/>
    </div>
  )
}

export default Dash