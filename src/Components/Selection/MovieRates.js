import React, {useState} from 'react'
import { BsBookmarkStarFill } from 'react-icons/bs'
import Titles from '../Titles'
import { Message, Select } from '../UsedInput'

function MovieRates({movie}) {
  const Ratings = [
    {
      title: '0 - Poor',
      value: 0,
    },
    {
      title: '1 - Fair',
      value: 1,
    },
    {
      title: '2 - Good',
      value: 2,
    },
    {
      title: '3 - Very Good',
      value: 3,
    },
    {
      title: '4 - Excellent',
      value: 4,
    },
    {
      title: '5 - Masterpiece',
      value: 5,
    }
  ]

const [rating, setRating] = useState();

  return (
    <div className='my-12'>
      <Titles title='Reviews' Icon= {BsBookmarkStarFill} />
      <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10  py-10 px-2 sm:p-20 rounded'>
        {/* write review movies */}
        <div className='xl:col-span-2 w-full text-black flex flex-col gao-8'>
          <h3 className='text-xl font-semibold text-text'>
            Review "{movie?.name}"
            </h3>
            <p className='text-sm leading-7 font-medium text-border'>
              Write a review for this movie. Your review may be edited for content.
            </p>
            <div className='text-sm text-white w-full'>
              <Select label='Select Rating' options={Ratings} onChange= {(e) => setRating(e.target.value)} 
              />
              <div className='flex mt-4 text-lg gap-2 text-star'>
             
                </div>
            </div>
            <Message label='Message' placeholder='Write your review here' />
            <button className='mt-4 w-full bg-subMain flex-colo text-white px-6 py-4 rounded'>   Submit</button>
        </div>
      </div>
    </div>
  )
}

export default MovieRates