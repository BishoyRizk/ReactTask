import React from 'react'

export default function Footer() {
  return <>
    <div className="footer  bgfooter text-white">
        <div className="container">
      <div className="row text-center">
        <div className="col-md-4">
          <div>
          <h2>LOCATION</h2>
          <h3>2215 John Daniel Drive</h3>
          <h3 className='my-2'>Clark, MO 65243</h3>
          </div>
         
        </div>


        <div className="col-md-4">
        <div>
          <h2>AROUND THE WEB</h2>
          <ul className='d-flex justify-content-center icons'>
            <li><i class=" m-3 fa-brands fa-facebook"></i></li>
            <li><i class=" m-3 fa-brands fa-twitter"></i></li>
            <li><i class=" m-3 fa-brands fa-linkedin-in"></i></li>
            <li><i class=" m-3 fa-solid fa-globe"></i></li>
          </ul>
        </div>
        </div>




        <div className="col-md-4">
            <div>
              <h2>ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>

        </div>


  
   
      </div>
        <div className="   bgfootertwo text-center ">
          <div>
   <p className='p-0 m-0'>Copyright © Your Website 2021</p>
          </div>
        </div>


      
    </div>
  
  
  </>
}
