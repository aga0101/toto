import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import '../App.css';

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <header class="masthead bg-tercary" style={{backgroundImage:"img/about/colorpallette.png"}}>
       <div class="container d-flex align-items-stretch flex-row">
         <div class="polaroid">
            <img src="img/about/doggygoinghome.jpeg" alt="promote" style={{width:"100%"}}/>
              <div class="containertext" style={{fontSize:"40px", fontStyle: "bold"}}>
                <p>ADOPT</p>
              </div>
         </div>
         <br/>
         <br/>
         <br/>
         <div class="polaroid">
         <Link to="/post">
           <img src="img/about/doggyselfie.jpeg" alt="adopt" style={{width:"100%"}}/>
            <div class="containertext" style={{fontSize:"40px", fontStyle: "bold"}}>
             <p>POST</p>
            </div>
          </Link>
         </div>
       </div>
      </header>
    </Fragment>
  );
 };
 
 export default Home
 // <img src={user.picture} alt="Profile" />
 // <h2>{user.name}</h2>
 // <p>{user.email}</p>
 // <code>{JSON.stringify(user, null, 2)}</code>