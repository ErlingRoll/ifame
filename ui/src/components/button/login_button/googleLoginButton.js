import React from 'react';

// Store
import { useDispatch } from 'react-redux';
import actions from '../../../store/actions';

// Services
import firebase from 'firebase';
import { auth } from '../../../services/firebase';

// Assets
const googleIcon = require('../../../assets/icons/google-icon.svg');

const GoogleLoginButton = () => {
    const dispatch = useDispatch();

    const login = () => {
        console.log('Logging in!');
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider)
            .then((res) => {
                dispatch(actions.user.setUser(res.user));
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <button
            onClick={login}
            className={
                'border-2 border-gray-400 shadow rounded flex items-center p-2 bg-white hover:bg-gray-300'
            }>
            <img
                src={googleIcon}
                className={'w-12 pr-4 object-contain'}
                alt={'google icon'}
            />
            <span className={'text-lg'}>Sign in with Google</span>
        </button>
    );
};

export default GoogleLoginButton;
