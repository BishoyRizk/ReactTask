import React from 'react'
import not from '../Assets/images/images.png'

export default function NotFound() {
  return <>
  <div className="NotFoundPage d-flex text-center justify-content-center align-items-center vh-100">
    <div className="container  ">
        <div className="img">
            <img src={not} className='w-50' alt="" />
            <h2>WrongPage</h2>
            <h3>Please try again</h3>
        </div>
    </div>



  </div>
  
  </>
}
