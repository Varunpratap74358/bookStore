import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'


const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <div
        className="flex h-screen items-center justify-center "
      >
        <div className="border-[2px] p-7 rounded-md shadow-md modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4">
            <span className="ml-2">Name:</span>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              className="md:w-80 w-[100%] px-3 rounded-md outline-none border-[3px] mt-1 mb-1"
              {...register("name", { required: true })}
            /><br />
              {errors.name && <span className='text-red-500 text-sm '> This field is required</span>}
          </div>
          <div className="mt-4">
            <span className="ml-2">Email:</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="md:w-80 w-[100%] px-3 rounded-md outline-none border-[3px] mt-1 mb-3"
              {...register("email", { required: true })}
            /><br />
              {errors.email && <span className='text-red-500 text-sm '> This field is required</span>}
          </div>
          <div>
            <span className="ml-2">Password:</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="md:w-80 w-[100%] px-3 rounded-md outline-none border-[3px] mt-1"
              {...register("password", { required: true })}
            /><br />
              {errors.email && <span className='text-red-500 text-sm '> This field is required</span>}
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 md:px-4 px-3 py-1 rounded-md hover:bg-pink-700">
              Signup
            </button>
            <p>
              Have Account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>{
                    document.getElementById('my_modal_3').showModal()
                }
                }
              >
                Login
              </button>{" "}
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
