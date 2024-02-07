import React from 'react'

export default function Contact() {
  return <> 
  <div className="contact  p-5">

  <div className='text-center'>
    <div className="">
    <h2>Contact section</h2>
    <div className="div d-flex justify-content-center align-items-center">
    <div className='three'></div>
    <i class=" pt-2 fa-solid fa-star"></i>
    <div className='four'></div>
    </div>

    </div>
    
    



  </div>
  <div className="row g-4">

    <div className="col-md-12 text-center">
      <input type="text" placeholder='UserName' className='w-50' />
    </div>


    <div className="col-md-12 text-center">
      <input type="text" placeholder='UserAge' className='w-50' />
    </div>




    <div className="col-md-12 text-center">
      <input type="email" placeholder='UserEmail' className='w-50' />
    </div>




    <div className="col-md-12 text-center">
      <input type="password" placeholder='UserPassword' className='w-50' />
      
    </div>

    <div className="col-md-12 text-center">
      <button className='btn btn-outline-success'>submit</button>
      
    </div>

  </div>

  </div>


  
  
  
  </>
}
