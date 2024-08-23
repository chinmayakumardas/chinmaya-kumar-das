import React from "react";

const Grid = ({ project }) => {
  return (
    <div className="flex flex-col justify-center">
        <div  className="cursor-pointer relative rounded-[15px] bg-cover hover:scale-2 bg-center w-full md:w-[42.5vw] h-[100vh]  p-4 flex flex-col items-center justify-center " 
              style={{ backgroundImage: `url(${project.image})` }}>
              
             
            </div>
           <div className="flex flex-col justify-around ">
               <h2 className="text-2xl font-bold">{project.name}</h2> 
               <p>
               <span>{project.type}, </span>
               <span>{project.client}</span>
               </p>
           </div>
    </div>
   
  );
};

export default Grid;
