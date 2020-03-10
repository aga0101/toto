import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <header class="masthead bg-primary text-white text-center">
       <div class="container d-flex align-items-center flex-column">
        <h4>Welcome, {user.name} !</h4>
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