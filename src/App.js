import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar.js"
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";
import AboutMe from "./components/AboutMe.js";
import Contact from "./components/Contact.js";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
	} from "react-router-dom";

function App() {

  return (
    <div className="App">

    <Router>
      <Route exact path="/">
            <Redirect to="/my-portfolio/Home" />
      </Route>
      <NavBar/>
			<Switch>
				<Route path = "/my-portfolio/Home" component = {Home}> <Home/> </Route>
			</Switch>
      <Switch>
				<Route path = "/my-portfolio/Resume" component = {Resume}> <Resume/> </Route>
			</Switch>
      <Switch>
				<Route path = "/my-portfolio/Projects" component = {Projects}> <Projects/> </Route>
			</Switch>
      <Switch>
				<Route path = "/my-portfolio/AboutMe" component = {AboutMe}> <AboutMe/> </Route>
			</Switch>
      <Switch>
				<Route path = "/my-portfolio/Contact" component = {Contact}> <Contact/> </Route>
			</Switch>
		</Router>

    </div>
    
  );
}

export default App;
