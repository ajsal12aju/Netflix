import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="container d-flex align-items-center justify-content-center p-5">
        <div className="row">
           <div className="col-12">
            <div class="card w-100 bg-transparent border-white">
             <div class="card-body d-flex align-items-center">
                <div className='text-white'>
                 <h5 class="card-title rem-2">Customise your home screen</h5>
                 <p className='w-75 card-text' >With supporting text below as a natural lead-in to additional content.</p>
                 </div>
                 <div className='d-flex align-items-center justify-content-center'>
                 <a href="#" class="btn btn-dark">Button</a>
                 </div>       
                </div>
             </div>    
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer
