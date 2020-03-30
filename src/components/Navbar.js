import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { NavLink } from "react-router-dom";

function Navbar() {
    
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                {!isAuthenticated && (
                    <a class="navbar-brand js-scroll-trigger" href="/">Toto <i class="fas fa-paw"></i> Initiative</a>
                )}
                {isAuthenticated && (
                    <a class="navbar-brand js-scroll-trigger" href="/welcome"> <i class="fas fa-paw"></i> Welcome, {user.name} !</a>
                )}
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"> 
                            {isAuthenticated && 
                            <NavLink to="/post">
                                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/post">Post</a>
                            </NavLink>
                            }
                        </li>
                        <li class="nav-item mx-0 mx-lg-1"> 
                            {isAuthenticated && 
                            <NavLink to="/about">
                                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/adopt">Adopt</a>
                            </NavLink>
                            }
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            {!isAuthenticated && (
                                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/home" onClick={() => loginWithRedirect({})}>Log in</a>    
                            )}
                            {isAuthenticated && <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#subscribe" onClick={() => logout()}>Log Out</a>
                            }
                        </li>
                        {/* <li class="nav-item mx-0 mx-lg-1">
                            {isAuthenticated && (
                                <img class="img-responsive" width="70" height="70" src={user.picture} alt=""/>
                            )}
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
