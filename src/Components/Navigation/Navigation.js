import React, {useState} from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import {useNavigate} from "react-router-dom";




function Navigation ( { isAuth, loggedOut } ) {

    const navigate = useNavigate();

    // toggleAuth moet in login en logou hetzelfde zijn

    function signOut () {

        navigate("/" )
        loggedOut(false);
    }

        return (
            <nav className="nav-container">

                    <ul>

                        <li>
                            <NavLink to="/"
                                     className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            { isAuth && <NavLink to="/blogposts"
                                     className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>
                                Blog Overzicht
                            </NavLink>}
                        </li>


                        <li>
                            <NavLink to="/login"
                                     className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>
                                Login
                            </NavLink>
                        </li>

                    </ul>


                { isAuth && <button
                    type="button"
                    onClick = {signOut}
                >
                    logout
                </button>}


            </nav>
        );
    }

export default Navigation;