import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

function Navbar() {
    
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Toto <i class="fas fa-paw"></i> Initiative</a>
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            {!isAuthenticated && (
                                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#subscribe" onClick={() => loginWithRedirect({})}>Log in</a>    
                            )}
                            {isAuthenticated && <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#subscribe" onClick={() => logout()}>Log Out</a>
                            }
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                        {isAuthenticated && (
                            <span>
                                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#home">
                                    <Link to="/">Home</Link>&nbsp;
                                </a>
                            </span>
                        )}
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                        {isAuthenticated && (
                            <span>
                                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#profile">
                                    <Link to="/profile">Profile</Link>
                                </a>
                            </span>
                        )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
