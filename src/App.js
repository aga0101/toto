import React from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Welcome from './components/Welcome.js';
import Home from "./components/Home";
import PostForm from "./components/PostForm";
import Adopt from "./components/Adopt";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router";
import history from "./utils/history";
import './App.css';


function App() {
  
  const { loading } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Switch>
          {!isAuthenticated && (
            <>
            <Route path="/" component={Welcome} />
            </>
          )}
          {isAuthenticated && (
            <>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/post" exact component={PostForm} />
            <Route path="/adopt" exact component={Adopt} />
            </>
          )}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


