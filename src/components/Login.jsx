import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import { Link } from 'react-router-dom';
function Login() {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const navigate = useNavigate();

 async function login(event){
    event.preventDefault();

    try{
        await axios.post("http://localhost:8080/api/v1/user/login", {
            email: email,
            password: password,
        }).then((res) => {
            console.log(res.data);

            if(res.data.message == "Email not exist"){
                alert("email not exist");
            }
            else if(res.data.message == "Login Successfully"){
                navigate('/home');
                alert("Logged In");
            }else {
                alert("Incorrect Emailand Password not match");
            }
        }, fail => {
            console.log(fail);
        }
        );

    }
    catch(err) {
       alert(err);
    }
 }

  return (
     <div className='container'>
        

        <h1>User Login</h1><br></br>
                
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-lg-12 col-xl-11" style={{    width: "500px"}} >
                    <div class="card text-black " >
                      <div class="card-body p-md-4">
                        <div class="row justify-content-center">
                          <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"></div>
                            <form>
                                {/* <!-- Email input --> */}
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
                                 
                                </div>
                              </div>
            
                                {/* <!-- 2 column grid layout for inline styling --> */}
                                <div class="row mb-4">
                                    <div class="col d-flex justify-content-center">
                                    {/* <!-- Checkbox --> */}
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
                                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                                    </div>
                                    </div>
            
                                    <div class="col">
                                    {/* <!-- Simple link --> */}
                                    <a href="#!">Forgot password?</a>
                                    </div>
                                </div>
            
                                {/* <!-- Submit button --> */}
                                <button type="button" class="btn btn-primary btn-block mb-4" onClick={login}>Sign in</button>
            
                                {/* <!-- Register buttons --> */}
            
                                <div class="text-center">
                                    <p>Not a member? <Link className='sign' to= "/register">Register</Link></p>
                                    <p>or sign up with:</p>
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-facebook-f "><img className='fab1'  src='https://img.icons8.com/color/2x/facebook-new.png' alt='facebook'/></i>
                                    </button>
            
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-google"><img className='fab1' src='https://img.icons8.com/color/2x/google-logo.png' alt='google'/></i>
                                    </button>
            
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-twitter"><img className='fab1' src='https://img.icons8.com/color/2x/twitter.png' alt='twitter'/></i>
                                    </button>
            
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-github"><img className='fab1' src='https://img.icons8.com/color/2x/github.png' alt='github'/></i>
                                    </button>
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

export default Login