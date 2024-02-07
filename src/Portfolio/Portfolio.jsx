import React from 'react'
import img1 from '../Assets/images/poert1.png'
import img2 from '../Assets/images/port2.png'
import img3 from '../Assets/images/port3.png'
export default function Portfolio() {
  return <>
  <div className="portfolio">
  <div className='text-center'>
    <div className="">
    <h2>PortFolio</h2>
    <div className="div d-flex justify-content-center align-items-center">
    <div className='three'></div>
    <i class=" pt-2 fa-solid fa-star"></i>
    <div className='four'></div>
    </div>

    </div>
    
  
  </div>

  <div className="container my-2">
    <div className="row g-5">

     
    <div className="col-md-4">
        <div className='position-relative holder ' data-bs-toggle="modal" data-bs-target="#r">
        <img src={img1} className='w-100' alt=""   />

        <div className='modal fade' id='r' tabIndex='-1' aria-hidden="true">
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={img1} className='d-block w-100' alt="" />
                    </div>

                  </div>

                </div>
            </div>

              <div className='layer d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#r">
              <i class=" plus fa-solid fa-plus"></i>
              {/* model */}
          
            {/* end model */}


              </div>

          </div>


      </div>



      <div className="col-md-4">
        <div className='position-relative holder ' data-bs-toggle="modal" data-bs-target="#x">
        <img src={img2} className='w-100' alt=""   />

        <div className='modal fade' id='x' tabIndex='-1' aria-hidden="true">
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={img2} className='d-block w-100' alt="" />
                    </div>

                  </div>

                </div>
            </div>

              <div className='layer d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#x">
              <i class=" plus fa-solid fa-plus"></i>
              {/* model */}
          
            {/* end model */}


              </div>

          </div>


      </div>


      <div className="col-md-4">
        <div className='position-relative holder ' data-bs-toggle="modal" data-bs-target="#y">
        <img src={img3} className='w-100' alt=""   />

        <div className='modal fade' id='y' tabIndex='-1' aria-hidden="true">
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={img3} className='d-block w-100' alt="" />
                    </div>

                  </div>

                </div>
            </div>

              <div className='layer d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#y">
              <i class=" plus fa-solid fa-plus"></i>
              {/* model */}
          
            {/* end model */}


              </div>

          </div>


      </div>


 
      <div className="col-md-4">
        <div className='position-relative holder ' data-bs-toggle="modal" data-bs-target="#z">
        <img src={img1} className='w-100' alt=""   />

        <div className='modal fade' id='z' tabIndex='-1' aria-hidden="true">
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={img1} className='d-block w-100' alt="" />
                    </div>

                  </div>

                </div>
            </div>

              <div className='layer d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#z">
              <i class=" plus fa-solid fa-plus"></i>
              {/* model */}
          
            {/* end model */}


              </div>

          </div>


      </div>



      <div className="col-md-4">
        <div className='position-relative holder ' data-bs-toggle="modal" data-bs-target="#d">
        <img src={img2} className='w-100' alt=""   />

        <div className='modal fade' id='d' tabIndex='-1' aria-hidden="true">
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={img3} className='d-block w-100' alt="" />
                    </div>

                  </div>

                </div>
            </div>

              <div className='layer d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#d">
              <i class=" plus fa-solid fa-plus"></i>
              {/* model */}
          
            {/* end model */}


              </div>

          </div>


      </div>



      <div className="col-md-4">
        <div className='position-relative holder ' data-bs-toggle="modal" data-bs-target="#g">
        <img src={img3} className='w-100' alt=""   />

        <div className='modal fade' id='g' tabIndex='-1' aria-hidden="true">
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={img3} className='d-block w-100' alt="" />
                    </div>

                  </div>

                </div>
            </div>

              <div className='layer d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#g">
              <i class=" plus fa-solid fa-plus"></i>
              {/* model */}
          
            {/* end model */}


              </div>

          </div>


      </div>

    </div>
  </div>



  </div>
  </>
}
