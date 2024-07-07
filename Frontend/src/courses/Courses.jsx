import React from 'react'
import Navbar from '../componantes/Navbar'
import Course from '../componantes/Course'
import Footer from '../componantes/Footer'
import list from '../../public/list.json'

const Courses = () => {
    // console.log(list)
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
      <Course list={list}/>
      </div>
      <Footer />
    </div>
  )
}

export default Courses
