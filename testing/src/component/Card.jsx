import React from 'react';

const Card = (props) => {
  return (
    <div className='flex justify-center items-center gap-2 border-[4px] rounded-md'>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.sal}</p>
      <img src={props.img} height='100px' width="100px" alt={props.name} />
      <button onClick={props.deleteHandler} className='bg-red-500 h-10 rounded-md px-3'>Delete</button>
    </div>
  );
};

export default Card;
