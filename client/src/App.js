import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import About from "./containers/About/About";
import AddToGarden from "./containers/AddToGarden/AddToGarden";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import LogIn from "./containers/LogIn/LogIn";
import NewPlants from "./containers/NewPlants/NewPlants";
import MyGarden from "./containers/MyGarden/MyGarden";
import Resources from "./containers/Resources/Resources";
import SignIn from "./containers/SignIn/SignIn";
import StartGarden from "./containers/StartGarden/StartGarden";
import NavBar from "./components/NavBar/NavBar";



function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/addToGarden" component={AddToGarden}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/logIn" component={LogIn}/>
          <Route exact path="/newPlants" component={NewPlants}/>
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
