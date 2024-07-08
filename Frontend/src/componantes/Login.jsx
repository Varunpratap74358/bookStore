import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:3000/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Login Successfully!');
        document.getElementById('my_modal_3').close()
        setTimeout(()=>{
          window.location.reload()
          localStorage.setItem("users",JSON.stringify(res.data.user))
        },1000)
      }
    }).catch((err)=>{
      if(err.response){
        toast.error('Error'+err.response.data.message);
        setTimeout(()=>{},3000)
      }
    })
  }

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
