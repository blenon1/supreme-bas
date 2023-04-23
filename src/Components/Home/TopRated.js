import React from 'react'
import { useState } from 'react'
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MoviesData';
import { Link } from 'react-router-dom';

import Stars from '../Stars';



function TopRated(movie) {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white"
  return (
    <div className='my-16'>
      <div className='flex'>
        < BsBookmarkStarFill className=' sm:w-10 sm:h-10 w-10 h-10 text-subMain' /> <h1 className='flex sm:text-2xl font-bold text-lg'>Popular Movies</h1>
      </div>

      <div className='mt-10'>
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {
            Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                  <img src={`/Images/movies/${movie?.titleImage}`}
                    alt={movie?.name}
                    className='w-full  h-full object-cover rounded-lg'
                  />
                </div>
                <div className='px-4 flex-colo gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0 r'>
                  <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30'>
                    <FaHeart />
                  </button>
                  <Link to={`/Images/movies/${movie?.name}`} className='font-semibold text-xl trancuted line-clamp-2'>
                    {movie.name}
                  </Link>
                  <div className='flex gap-2 text-start'>
                    <Stars value={movie.rating} 
                    />
                  </div>
                </div>

              </SwiperSlide>
            ))

          }

        </Swiper>
        <div className='flex-rows w-full px-1 gap-6 pt-12'>
          <button className={classNames} ref={(node) => setPrevEl (node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl (node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopRated