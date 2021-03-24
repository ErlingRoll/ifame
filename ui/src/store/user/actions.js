import { MUTATIONS } from './reducer';
import * as firebase from '../../services/firebase';

export function login(payload) {
    return { type: 'LOGIN', payload };
}

const setUser = (user) => ({
    type: MUTATIONS.SET_USER,
    payload: user,
});

const signOut = () => ({
    type: MUTATIONS.LOGOUT,
});

export default {
    setUser,
    signOut,
};
