import React from 'react'
import Navbar from '../componantes/Navbar'
import Footer from '../componantes/Footer'
import Contact from '../componantes/Contact'

const Contexts = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Contexts
