import React, { useState } from 'react'
import { Addnote } from './Addnote';
import Login from './Login';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [show, setShow] = useState(false);
  const data = { "id": "", "title": "", "desc": "" }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    window.location.reload();
  }

  return (
    <>
<div className='container' >
<ul className="nav nav-pills   p-3  mb-3  align-items-center">
        <li className="nav-item nav-link btn-primary rounded-pill d-flex align-items-center px-3">
          
           <button className='btn btn-primary'><span className="d-md-block">All Notes</span></button> 
        
        </li>
       
        
       
         
        <li className="line ml-auto   rounded-pill d-flex align-items-center px-3" onClick={handleShow}>
          
            <span className="d-none d-md-block font-14 line " >Add Notes</span>
        </li> 
          
        <li className=" line d-flex align-items-center px-3">
          
            <span className=" d-md-block  ">Important Notes</span>
          
        </li>
        
          <li className="line mr-auto  rounded-pill d-flex align-items-center px-3"  onClick={handleShow2}>
            
              <Link to={'/'} style={{textDecoration:'none', color:'black', marginLeft:'500px'}}><span className="d-none d-md-block font-14 btn btn-outline-dark"  >Logout</span></Link>
    
          </li>
            
  </ul>
      {show && <Addnote handleClose={handleClose} show={show} data={data} edit={false} />}
      {show2 && <Login handleClose2={handleClose2} show2={show2} />}
      <hr></hr>
      <br></br>
</div>
      

    </>
  )
}
