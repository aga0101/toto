import React from 'react';
import '../App.css';

function Welcome() {

  return (
    <div> 
        <header class="masthead bg-primary text-white text-center">
          <div class="container d-flex align-items-center flex-column">
            <br/>
            <br/>
            <img class="img-responsive" width="200" height="200" src="img/totologo.png" alt=""/>
            <br/>
            <br/>
            <br/>
            <h1 class="masthead-heading text-uppercase mb-0 text-white text-center">Welcome!</h1>
            <div class="divider-custom divider-dark">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-paw"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <p class="masthead-subheading font-weight-light mb-0 ">LOG IN TO CONTINUE.</p>
          </div>
        </header>
    </div>
  );
}


export default Welcome;
