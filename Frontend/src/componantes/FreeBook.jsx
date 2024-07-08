import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import axios from "axios"
import React, { useEffect, useState } from 'react'
import Card from './Card'

const FreeBook = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook =async ()=>{
      try {
      const res=await axios.get("http://localhost:3000/book")
      // console.log(res.data)
      setBook(res.data)
      } catch (error) {
        console.log("Error hai course componante me")
      }
    }
    getBook();
  },[])

  const filterData = book.filter((data) => data.category == 'Free')
  // console.log(filterData)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books Hare</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aliquam
            nisi iste quaerat nesciunt.Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. At aliquam nisi iste quaerat nesciunt.
          </p>
        </div>
        <div className='mt-3'>
          <Slider {...settings}>
            {filterData.map((v,i)=>(
                <Card key={v.id} v={v} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FreeBook
