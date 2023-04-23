import React from 'react'
import Movie from '../Movie';
import {Movies} from '../../Data/MoviesData';
//import Titles from "../Titles";
import { HiBellSnooze } from "react-icons/hi2";

function PopularMovies() {
  return (
    <>
      <div className='flex my-16'>
< HiBellSnooze  className='sm:w-10 sm:h-10 w-10 h-10 text-subMain'/> <h1 className='sm:text-2xl font-bold text-lg'>Popular Movies</h1>  
      </div>
      
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
{
  Movies.slice(0, 8).map((movie, index ) => (
    <Movie key={index} movie={movie} />
    
  ))
}
      </div>
    </>
  )
}

export default PopularMovies