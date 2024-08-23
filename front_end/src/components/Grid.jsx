import React from 'react';

const Grid = ({ project }) => {
  return (
    <div className="grids min-h-[100vh] w-full md:w-[42vw] group overflow-hidden">
      <div className="relative h-[110vh] overflow-hidden rounded-[15px] md:rounded-[25px]">
        <div 
          className={`img-div cursor-pointer rounded-[15px] md:rounded-[25px] bg-cover h-full transition-transform duration-500 ease-in-out transform   group-hover:scale-125`} 
          style={{ backgroundImage: `url(${project.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
      </div>
      <div className="py-2">
        <h1 className='uppercase font-bold text-2xl'>{project.name}</h1>
        <p>{project.client}, {project.type}</p>
      </div>
    </div>
  )
}

export default Grid;