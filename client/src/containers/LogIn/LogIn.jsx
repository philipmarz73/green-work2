import React from 'react';

const LogIn = () => {
    return (
        <div className="container">
        <div className="row">    
        <div className="col">
        <h1 className="center-align">Log In</h1>
            </div> 
            </div>
            <div className="row">
            <form className="col s12">
              <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6">
                  <input
                  placeholder="Login"
                  id="title"
                  type="text"

                  />
              <label htmlfor="title">Email</label>
              </div>
      </div>
      <div className="row">
      <div className="col s3"></div>
              <div className="input-field col s6">

                
                  <input placeholder="Plant Name" 
                  id="title" 
                  type="text" 
                  />
        <label htmlfor="title">Password</label>
        </div>
      </div>
      <div className="row center-align">
          <button className="waves-effect waves-light btn">Sign Up</button>
      </div>
      </form>
      </div>
      </div>
                 
    );
};

export default LogIn;

{/* onSubmit={handleFormSubmit}></div> */}