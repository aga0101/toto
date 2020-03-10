import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router";
import Profile from "./components/Profile";
import history from "./utils/history";

function App() {
  
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router history={history}>
        <Navbar />
        
        <header className="masthead bg-primary text-white text-center">
          <div class="container d-flex align-items-center flex-column">
            <br/>
            <br/>
            <div class="frame">
            <img class="img-responsive" width="200" height="200" src="img/totologo.png" alt=""/>
            </div>
            <br/>
            <br/>
            <br/>
            <h1 class="masthead-heading text-uppercase mb-0 text-white text-center">Shop To Adopt</h1>
            <div class="divider-custom divider-dark">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-paw"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <p class="masthead-subheading font-weight-light mb-0 ">Help place more shelter pets in their forever homes.</p>
          </div>
        </header>
        <Switch>
        <Route path="/" exact />
        <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;


