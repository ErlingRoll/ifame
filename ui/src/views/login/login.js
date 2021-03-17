import React from 'react';

// Services
import firebase from 'firebase';
import { auth } from '../../services/firebase';

const Login = ({ ...props }) => {
    const login = () => {
        console.log('Logging in!');
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider)
            .then((res) => {
                console.log(res.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            Dashboard
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;
