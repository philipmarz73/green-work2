import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/login", {email, password})
        .then(response => {
            console.log(response.data);
            history.push("/MyGarden");
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <div className="container">
        <div className="row">    
        <div className="col">
        <h1 className="center-align">Log In</h1>
            </div> 
            </div>
            <div className="row">
            <form className="col s12" onSubmit={handleFormSubmit}>
              <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6">
                  <input
                  placeholder="Login"
                  id="title"
                  type="email"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.title.value);
                }}

                  />
              <label htmlfor="title">Email</label>
              </div>
      </div>
      <div className="row">
      <div className="col s3"></div>
              <div className="input-field col s6">

                
                  <input 
                  id="password" 
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                      setPassword(e.target.value);
                  }}
                  />
        <label htmlFor="title">Password</label>
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

