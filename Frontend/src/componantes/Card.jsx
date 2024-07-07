import React from 'react'

const Card = ({v}) => {
    // console.log(v.id)
  return (
    <div className='p-3 '>
      <div className="card bg-base-100 md:w-92 w-95  shadow-xl mb-5 border-[2px] pt-2 hover:scale-105 duration-200">
        <figure>
          <img
          className='h-80 w-80 p-2 rounded-md'
            src={`${v.image}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {v.name}
            <div className="badge badge-secondary">{v.category}</div>
          </h2>
          <p>{v.title}</p>
          <div className="card-actions justify-between">
            <div className="hover:bg-pink-500 hover:text-white cursor-pointer cursior-pointer px-3 py-1 rounded-full border-[2px]">$ {v.price}</div>
            <div className=" hover:bg-pink-500 hover:text-white cursor-pointer cursior-pointer px-2 py-1 rounded-full border-[2px]">Bye Now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
