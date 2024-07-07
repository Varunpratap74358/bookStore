import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4">
              <span className="ml-2">Email:</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="md:w-80 w-[100%] px-3 rounded-md outline-none border-[3px] mt-1 mb-3"
                {...register("email", { required: true })}
              /> <br />
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
              /> <br />
              {errors.password && <span className='text-red-500 '>This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 px-4 py-1 rounded-md hover:bg-pink-700">
                Login
              </button>
              <p>
                Not registered?{' '}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
