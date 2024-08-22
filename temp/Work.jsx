import React from 'react'
import Grid from '../components/Grid'

const Work = () => {
  return (
    <div className="px-[3.5vw]">
      <h1>My Recent works</h1>
      <div className='border-2 py-2 border-red-600 flex flex-col md:flex-row sm:px-auto flex-wrap gap-5'>
          <Grid/>
          <Grid/>
          <Grid/>
          <Grid/>
      </div>
    </div>
  )
}

export default Work


import React from 'react'

const Grid = () => {
    const bgimg = "https://cdn.pixabay.com/photo/2024/02/15/14/31/donkey-8575524_640.jpg";
    return (
        <div className="h-[90vh] sm:h-[90vh] md:h-[90vh] lg:h-[90vh] w-full xsm:w-[80vw] mx-auto  sm:w-1/2 md:w-[45vw]  rounded-[2vw] bg-red-500"
            style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
    )
}

export default Grid;
