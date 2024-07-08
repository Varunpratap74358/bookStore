import Signup from "./componantes/Signup"
import Contexts from "./context/Contexts"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import React from "react"
import { Navigate, Route, Routes } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./contextcourse/Authprovider"


function App() {

  const [authUser,setAuthuser]=useAuth()
  console.log(authUser)

  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser? <Courses />: <Navigate to='/signup' />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contexts />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
