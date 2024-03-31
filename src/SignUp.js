import React from 'react'
import { Link } from "react-router-dom";
export default function Signup() {
  return (
      <div style={{zoom:'110%'}}>
      <div style={{color:'white',backgroundColor:'#42618f',border:'2px solid black',fontSize:25,paddingBottom:'10px'}}> <strong style={{paddingRight:'400px'}}> Book Mark Manager</strong> Sign up</div>
      <div className="my-0" style={{paddingLeft:'280px',border:'2px solid black',backgroundColor:'#c6c1cf',paddingBottom:'200px'}}>
            <div className="my-5 mx-5 form-floating mb-5" style={{width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="username" autoComplete="on"></textarea>
                <label htmlFor="username">Enter Username</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="email" autoComplete="on"></textarea>
                <label htmlFor="email">Enter Email</label>
            </div> 
            <div className="my-5 mx-5 form-floating" style={{width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="mobilenumber" autoComplete="on"></textarea>
                <label htmlFor="mobilenumber">Enter Mobile Number</label>
            </div> 
            <div className="my-5 mx-5 form-floating" style={{width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="password" autoComplete="on"></textarea>
                <label htmlFor="password">Password</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="confirmpassword" autoComplete="on"></textarea>
                <label htmlFor="confirmpassword">Confirm password</label>
            </div> 
            <div style={{paddingLeft:'150px',color:'white'}}>
            
            </div> 
            <div style={{paddingLeft:'270px',fontSize:25,paddingBottom:'50px'}}>
                <button type="button" className="btn btn-outline-dark btn-lg" style={{backgroundColor:'#42618f',textDecoration:'none'}} id="loginButton" ><Link to="/Navbar" style={{textDecoration:'none',color:'white'}}>Signup</Link></button>
                
            </div>
            <div style={{paddingLeft:'270px',fontSize:25}}>
                <strong className='mx-2' style={{fontSize:20}}>Already a User?</strong>
                <button type="button" className="btn btn-outline-dark btn-lg" style={{color:'blue',border:'none',backgroundColor:'#c6c1cf'}} id="login"><Link to="/login">Log in</Link></button>
            </div> 
             
             
      </div>
    </div>
  )
}
