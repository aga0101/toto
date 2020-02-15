import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Diagram from './components/Diagram.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <header className="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <img class="img-responsive" width="233" height="300" src="img/toto.png" alt=""/>
          <h1 class="masthead-heading text-uppercase mb-0 text-white text-center">Shop &amp; Adopt</h1>
          <div class="divider-custom divider-dark">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <p class="masthead-subheading font-weight-light mb-0 ">Help place more shelter pets in their forever homes.</p>
        </div>
      </header>
      <Diagram />
      <Form />
      <Footer />
    </div>
  );
}

export default App;


