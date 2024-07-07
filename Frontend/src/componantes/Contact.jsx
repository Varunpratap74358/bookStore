import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-4">
        <div className="mt-28 ">
          <h1 className="md:text-4xl text-2xl md:ml-[30%] font-bold">Contact Us</h1>
          <form action="" className='border-[2px] px-10  py-5 rounded-lg md:w-[450px] mt-3 md:ml-[30%] '>
            <div>
              <label htmlFor="">Name:</label><br />
              <input type="text" className='border-2 rounded-md md:py-2 md:px-4 px-2 w-[100%]  md:w-[350px]'/>
            </div>
            <div>
              <label htmlFor="">Email:</label><br />
              <input type="email" className='border-2 rounded-md md:py-2 w-[100%] md:w-[350px]'/>
            </div>
            <div>
              <label htmlFor="">Message:</label><br />
              <textarea name="" class="resize-none border p-2 w-[100%] md:w-[350px]  " rows="4" ></textarea>
            </div>
            <button className="bg-blue-600 py-2 px-4 rounded-lg text-white mt-3">
                Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
