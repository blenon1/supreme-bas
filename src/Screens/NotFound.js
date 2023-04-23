import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'

function NotFound() {
  return (
    <div className='flex-colo w-full h-screen gap-8 min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img
        src='/Images/404.png'
        alt='notfound'
        className='w-full h-96 object-contain' />
      <h1 className='lg:text-4xl font-semibold '>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="bg-subMain flex-rows gap-4 transitions text-white font-semibold py-3 px-6 hover:text-main rounded-lg">
        <BiHomeAlt /> Back Home
      </Link>
    </div>
  )
}

export default NotFound