import React from 'react'
import Filters from '../Components/Home/Filters'

import Layout from '../Layout/Layout'

function Movie() {
  return (
    <Layout >
    <div className="container min-height-screen mx-auto px-2 my-6">
      <Filters/>
    </div>
       
</Layout>
  )
}

export default Movie