import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MoviesData'
import FlexMoviesItems from '../FlexMoviesItems';
import { Link } from 'react-router-dom'; 
import { FaHeart } from 'react-icons/fa';

function Banner() {
    return (
        <div className='relative w-full justify-center'>
            <Swiper
                direction='vertical'
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                className='w-full xl:h-96 bg-dry lg:h-64 h-48'
            >

                {
                    Movies.slice(0, 6).map((movie, index) => (
                        <SwiperSlide key={index} className="relative rounded overflow-hidden">
                           
                            <img
                                src={`/Images/movies/${movie.image}`}
                                alt={movie.name}
                                className='w-full h-full object-cover  ' />
                            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 flex flex-col justify-center right-0 left-0 lg:gap-8 md:gap-5 gap-4">
                                <h1 className="text-white text-xl xl:text-2xl sm:text-4xl font-sans font-bold truncate capitalize">
                                    {movie.name}
                                </h1>
                                <div className="flex gap-5 items-center text-dryGray">
                                    <FlexMoviesItems movie={movie}/>
                                </div>
                                <div className="flex gap-5 items-center ">
                                    <Link to={`/movie/${movie.name}`} className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs  ">
                                    Watch Now
                                    </Link>
                                    <button className="bg-white hover:text-main transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                                        <FaHeart/>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }



            </Swiper>

        </div>
    )
}

export default Banner