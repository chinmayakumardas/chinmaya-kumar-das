import React, { useState } from 'react'

import Card from './Card';
const Cards = () => {
  function deleteHandler(index){
   
    setData((prevFormData) => {
      const newData = [...prevFormData]; 
    newData.splice(index, 1); 
    return newData;
    });
  }
  let [data,setData]=useState(
    [
      {
        name:"chinu",
        age:22,
        sal:2000,
        img:"https://avatars.githubusercontent.com/u/115868110?s=96&v=4"
      }
      ,
      {
        name:"sanjay",
        age:32,
        sal:6000,
        img:"https://media.licdn.com/dms/image/C5603AQFEjsr02x5xUg/profile-displayphoto-shrink_400_400/0/1624703192852?e=1719446400&v=beta&t=sx_fy7LJA9n-IJ0b-XTsNtsp5rR-O3nNjfaFCpBD6Bs"
      },
      {
        name:"ajay",
        age:52,
        sal:27000,
        img:"https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2023/01/05071430/10.jpg"
      }
      ,
      {
        name:"kalia",
        age:22,
        sal:5000,
        img:"https://media.licdn.com/dms/image/C5603AQFEjsr02x5xUg/profile-displayphoto-shrink_400_400/0/1624703192852?e=1719446400&v=beta&t=sx_fy7LJA9n-IJ0b-XTsNtsp5rR-O3nNjfaFCpBD6Bs"
      }
      
    ]
  );
  const dataHandler = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);
    const newData = {
      name: formData.get('name'),
      age: parseInt(formData.get('age')),
      sal: parseInt(formData.get('sal')),
      img: formData.get('url')
    };
    setData((prevData) => [...prevData, newData]);
    event.target.reset(); // Clear the form fields after submission
  };
  return (
    <div className='width-[500px] bg-green-300 gap-3 rounded-sm'>
    <div >
    <form onSubmit={dataHandler} className=' bg-black px-2 py-2 flex flex-col gap-2 cursor-pointer'>
      <input type='text' className='px-2 text-black'  placeholder='enter name'></input>
      <input  type='text' className='px-2' name='age'  placeholder='enter age'></input>
      <input  type='text' className='px-2' name='sal' placeholder='enter salary'></input>
      <input type='text' className='px-2 ' name='url' placeholder='Upload img'></input>
      <button className='bg-red-700 px-2 py-2 rounded-md text-green-400 font-bold'>Add</button>
    </form>
    </div>

    <div>
    {
      data.map((datas,index)=>{
        return <Card key={index} name={datas.name} age={datas.age} sal={datas.sal} img={datas.img} deleteHandler={()=> deleteHandler(index)} />
      })
    }
    </div>
    </div>
  )
}

export default Cards