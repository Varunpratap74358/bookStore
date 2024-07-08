import React from 'react'
import { useAuth } from '../contextcourse/Authprovider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authuser,setAuthUser]=useAuth()

    const handelLogout =()=>{
        try {
            setAuthUser({
                ...authuser,
                uset:null
            })

            localStorage.removeItem("users")
            
            toast.success("Logout Successfully")
            setTimeout(()=>{
              window.location.reload()
            },1000)
         } catch (error) {
            toast.error("Error"+error.message)
            setTimeout(()=>{},3000)
        }
    }
  return (
    <div>
      <button  className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer' onClick={handelLogout}>Logout</button>
    </div>
  )
}

export default Logout
