import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const Course = ({list}) => {

  

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-bold md:text-4xl'>We're delighted to have you <span className='text-pink-600'> Here:)</span></h1>
          <p className='mt-12 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima facilis dolorem delectus impedit harum modi, similique non porro nihil. Molestias corporis omnis itaque, sint blanditiis libero maxime laudantium aut voluptatum animi quasictus impedit harum modi, similique non porro nihil. Molestias corporis omnis itaque, sint blanditiis libero maxime laudantium aut voluptatum animi quasi nulla totam non numquam consequuntur necessitatibus nisi?</p>
         <Link to='/'> <button className="btn btn-secondary px-7 py-2 mt-4">Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          {
            list.map((v,i)=>(
              <Card key={i} v={v} />
            ))
          }
        </div>
    </div>
  )
}

export default Course
