import React from 'react'
import { Link } from 'react-router-dom'

function Forgot() {
 
 const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email : e.email
  };
}

  return (
    <div className='container'>
        
                  <br></br>
                  <h2>Forgot Password</h2>
                  <br></br>
                
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-lg-12 col-xl-11" style={{    width: "500px"}} >
                    <div class="card text-black " >
                      <div class="card-body p-md-4">
                        <div class="row justify-content-center">
                          <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"></div>
                           
                            <form action='' method='post' onSubmit={handleSubmit} >
                                <div className='form-group'>
                                    <input required type='email' name='email' placeholder='Enter email here' className='form-control'/>
                                     
                                </div><br></br>
                                <div className='form-group'>
                                <button className='btn btn-warning ' type='submit'><Link to="/sentOTP" className='sign1' >Sent OTP</Link></button>
                                </div>
            
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
   
  
        
    </div>
  )
}

export default Forgot