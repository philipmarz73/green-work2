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
            <form className="col s12" 
              
              <label htmlfor="title">Email</label>
              <div className="row">


                <div className="input-field col s6">
                  <input placeholder="Plant Name" 
                  id="title" 
                  type="text" 
                  />
        <label htmlfor="title">Password</label>
        </div>
      </div>
      </form>
      </div>
      </div>
                 
    );
};

export default LogIn;

{/* onSubmit={handleFormSubmit}></div> */}