import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import LogIn from "./containers/LogIn/LogIn";
import NewPlants from "./containers/NewPlants/NewPlants";
import MyGarden from "./containers/MyGarden/MyGarden";
import SignIn from "./containers/SignIn/SignIn";
import NavBar from "./components/NavBar/NavBar";



function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/logIn" component={LogIn}/>
          <Route exact path="/newPlants" component={NewPlants}/>
          <Route exact path="/myGarden" component={MyGarden}/>
          <Route exact path="/signIn" component={SignIn}/>




        </Switch>
      </Router>
    </div>
  );
}

export default App;
