import React from 'react';

export default function LogIn() {
  const formStyle = {
    maxWidth: '700px', // Adjust this value to change the form width
    margin: 'auto',
    padding: '2rem',
    border:"1px solid Transparent",
    backgroundColor:"white"
  };

  return (
    <>
      <form style={formStyle}>
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
        </div>

        <div className="checkbox mb-4">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          LogIn
        </button>
        <p className="mt-5 mb-3 text-muted">© 2023</p>
      </form>
    </>
  );
}
