import React from 'react';
import { Link } from 'react-router-dom';

export default function LogIn() {
  const formStyle = {
    maxWidth: '500px', // Adjust this value to change the form width
    margin: 'auto',
    padding: '2rem',
    border:"1px solid Transparent",
    backgroundColor:"white"
  };

  return (
    <>
    
      <form style={formStyle}>
        <img src='./title-logo.png' alt='k' width={"100px"} />
        <div className='border border-light-subtle p-3'>
        <h1 className="h3 mb-3 fw-normal">Please Log In</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
          <Link to="/" style={{textDecoration:"none"}}>Forgot password ?</Link>
        </div>

        <div className="checkbox mb-4">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          LogIn
        </button>
        </div>

        <div className='border border-light-subtle p-3 mt-3'>  <p> Don't have an account ? <Link to="/">Create an account</Link></p></div>
        <div className='d-flex '>
          <div><p className="m-1 mb-3 p-2 text-muted">Terms</p></div>
          <div><p className="m-1 mb-3 p-2 text-muted">Privacy</p></div>
          <div><p className="m-1 mb-3 p-2 text-muted">Security</p></div>
          <div><p className="m-1 mb-3 p-2 text-muted">Contact</p></div>

        </div>
        
      </form>
     
    </>
  );
}
