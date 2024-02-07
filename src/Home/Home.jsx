import React from 'react'
import img from  '../Assets/images/avataaars.svg'

export default function Home() {
  return <>
    <div className="start pt-5">

  <div className="row text-center">
  <div className="col-md-12">
  <div className="address">
    <img src={img} className='my-2 w-25' alt="" />
      <h2>StartFrameWork</h2>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='one'></div>
        <i class=" pt-2 fa-solid fa-star"></i>
        <div className='two'></div>
      </div>
    </div>
    <h6 className='pt-3'>Graphic Artist - Web Designer - Illustrator</h6>
  </div>
  



  </div>


  </div> 
  </>
}
