import React, { useState } from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

function Register() {

    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errors, setErrors] = useState({});
    
    // function validateEmail(email) {
    //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return re.test(email);
    //   }
      
    //   function validatePassword(password) {
    //     return password.length >= 8;
    //   }

      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};
        if (!username) {
          validationErrors.username = 'Name is required';
        }
        if (!email) {
          validationErrors.email = 'Email is required';
        }
        if (!password) {
          validationErrors.password = 'Password is required';
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
          // submit the form
          save();
        }
      };

    async function save(event){
        event.preventDefault();

        try{
            await axios.post("http://localhost:8080/api/v1/user/save" , {
                username : username,
                email : email,
                password: password,
            });
            alert("User Registered Successfully");
            
        }
        catch(err){
            alert("Email Id already exist");
        }
    }
  return (
    <div>      

        <section class="vh-100"  >
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" >
                <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Your Name</label>
                            <input required type='text' className='form-control ' id='username' 
                                placeholder='Enter Name' value={username}
                                onChange={(event) => {
                                    setUserName(event.target.value)
                                }}
                            />
                            {errors.username && <span>{errors.username}</span>}
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Your Email</label>
                            <input required type='email' className='form-control' id='email' 
                                placeholder='Enter Email' value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                            {errors.email && <span>{errors.email}</span>}
                            
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4c">Password</label>
                            <input required type='password' className='form-control' id='password' 
                                placeholder='Enter password' value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                            />
                                {errors.password && <span>{errors.password}</span>}
                            
                            </div>
                            
                        </div>

                        

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" class="btn btn-primary btn-md" onClick={save}>Register</button>
                            <p>Already Have Account? <Link className='sign' to= "/">Sign In</Link></p>
                        </div>

                        </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image"/>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        
    </div>
  )
}

export default Register











{/* <div className='container '>
        <h1>User Registration</h1>
               
               <form>
                    <div className='form-group row'>
                        <label className='label'>User Name</label>
                        <input type='text' className='form-control ' id='username' 
                          placeholder='Enter Name' value={username}
                          onChange={(event) => {
                            setUserName(event.target.value)
                          }}
                       />
                    </div>

                    <div className='form-group row'>
                        <label className='label'>Email ID</label>
                        <input type='email' className='form-control' id='email' 
                          placeholder='Enter Email Id' value={email}
                          onChange={(event) => {
                            setEmail(event.target.value)
                          }}
                       />
                    </div>

                    <div className='form-group row'>
                        <label className='label'>Password</label>
                        <input type='password' className='form-control' id='password' 
                          placeholder='Enter password' value={password}
                          onChange={(event) => {
                            setPassword(event.target.value)
                          }}
                       />
                    </div>

                    <button type='submit' className='btn btn-primary mt-4' onClick={save}>Save</button>
                    <button type='submit' className='btn mt-4 btn-secondary' ><Link className='sign1' to= "/">Login</Link></button>

                </form>
                
                
                
            </div> */}