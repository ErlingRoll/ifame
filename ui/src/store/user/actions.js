import { MUTATIONS } from './reducer';
import * as firebase from '../../services/firebase';
import { Dispatch } from 'react';

export function login(payload) {
    return { type: 'LOGIN', payload };
}

const setUser = (user) => ({
    type: MUTATIONS.SET_USER,
    payload: user,
});

const signOut = () => {
    firebase.auth.signOut();
};

export default {
    setUser,
    signOut,
};
