import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import PopularMovies from '../Components/Home/PopularMovies'
import TopRated from '../Components/Home/TopRated'
import NewsMovies from '../Components/Home/NewsMovies'

function HomeScreen() {
  return (
    <Layout>
    <div className='container mx-out min-h-screen px-2 mb-6'>
    
      <Banner/>
      <PopularMovies/>
      <NewsMovies />
      <TopRated/>
    </div>
    </Layout>
  )
}

export default HomeScreen