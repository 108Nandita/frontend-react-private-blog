import React from 'react';
import './LoginPage.css';
import {useNavigate} from "react-router-dom";

function LoginPage ({toggleAuthenticated}) {
const navigate = useNavigate();

function signIn () {
    toggleAuthenticated(true);
    navigate("/blogposts")
}

        return (
            <>
                <main className="page-container">
                <h3>Login</h3>
                <p>Druk op de knop om je in te loggen!</p>
                <button
                    type="button"
                    onClick={signIn}
                >
                    Login
                </button>
                </main>
            </>
        );
    }
export default LoginPage;