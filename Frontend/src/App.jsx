import Signup from "./componantes/Signup"
import Contexts from "./context/Contexts"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import React from "react"
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contexts />} />
      </Routes>
    </>
  )
}

export default App
