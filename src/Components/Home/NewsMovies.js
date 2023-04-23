import React from 'react'
import { FiUser } from 'react-icons/fi';

function NewsMovies() {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry '>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>
          <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium XL/leading-relaxed'> Watch your favorite moment <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Maiores velit aperiam, et delectus cum reprehenderit</h1>
          <p className='text-text text-sm xk:text-base leading-6 xl:leading-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='flex gap-4 md:text-lg text-sm'>
            <div className='flex-colo bg-black text-subMain px-6 py-3 rounded-md font-bold'>
              HD 4K
            </div>
            <div className='flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded-md font-bold'>
             <FiUser/>  2k
            </div>
          </div>
        </div>
        <div className='flex'>
          <img src="/Images/Phone.png" alt='Monile App' className='w-full h-96 object-contain' />
          <img src='/Images/Phone.png' alt='Monile App' className='w-full h-96 object-contain' />
        </div>
      </div>
    </div>
  )
}

export default NewsMovies