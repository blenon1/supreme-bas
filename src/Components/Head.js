import React from 'react'


function Head({title}) {
    return (
        <div className='w-full bg-deepGray lg:h-64 relative overflow-hidden rounded-md'>
            <img src="https://img.nrj.fr/o8CGwJjeu84yS5XHiV6OFBzlIMw=/medias/2021/04/elite-saison-4_6075542fb193d.jpg" alt="aboutus" className='w-full h-full object-cover' />
            <div className='absolute top-16 lg:top-24 w-full flex-colo'>
                <h1 className='text-2xl lg:text-white text-center font-bold'>
                    {title}

                </h1>

            </div>
        </div>
    )
}

export default Head