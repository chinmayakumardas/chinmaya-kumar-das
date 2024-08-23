import React, { useContext } from 'react'
import { AppContext } from './../contexts/Appcontext';
import Grid from './../components/Grid';
 
const Work = () => {
  const {works}=useContext(AppContext);
  return (
    <div className="px-[3.5vw]">
      <div className='w-[60vw] h-[30vh] flex flex-col justify-between'>
        <h1>Bringing ideas to life and setting you up for the future</h1>
        <span className='text-[6vw]  uppercase border-b-2 font-HeleveticaNow font-bold my-10'><h1 >Recent Works</h1></span>
      </div>
      <div className='flex flex-col  md:flex-row justify-between flex-shrink-0 flex-wrap gap-10'>
      {
        works.map((item,index)=>{
          return (<Grid key={index} project={item}/>)
        })
      }
      </div>
    </div>
  )
}

export default Work