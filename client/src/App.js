import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import About from "./containers/About/About";
import AddToGarden from "./containers/AddToGarden/AddToGarden";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Login from "./containers/LogIn/LogIn";
import NewPlants from "./containers/NewPlants/NewPlants";
import MyGarden from "./containers/MyGarden/MyGarden";
import Resources from "./containers/Resources/Resources";
import SignIn from "./containers/SignIn/SignIn";
import StartGarden from "./containers/StartGarden/StartGarden";
import NavBar from "./components/NavBar/NavBar";
// import AlertContext from "./utils/alertContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  // const [alert, setAlert] = useState({ message: "", type: "" });
  const [token, setToken] = useState("");

  return (
    <div>
      <Router>
        {/* <AlertContext.Provider value={{ ...alert, setAlert: setAlert}}> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/addToGarden" component={AddToGarden}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/logIn" 
            component={(props) => <Login {...props} setToken={setToken} />}
            />
          <ProtectedRoute 
          exact path="/newPlants" 
          component={NewPlants}
          token={token}
          />
          <Route exact path="/myGarden" component={MyGarden}/>
          <Route exact path="/resources" component={Resources}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/startGarden" component={StartGarden}/>




        </Switch>
      </Router>
    </div>
  );
}

export default App;
