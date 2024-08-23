import React from 'react'

const Contact = () => {
  return (
    <div className='w-full px-[4vw]'>
        <div className="main"></div>
        <div className="form">
          <h2>Fill the form below:</h2>
          <form action="">
              <div className="lower">
                <div className="flex gap-2 items-center">
                    <input className='' type="checkbox" name="" id="" />
                    <p>I agree with the <span className='underline'><a href="">Privacy Policy.</a></span> </p>
                </div>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Contact