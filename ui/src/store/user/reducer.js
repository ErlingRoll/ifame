import * as firebase from '../../services/firebase';
export const MUTATIONS = {
    SET_USER: 'USER_SET_USER',
    LOGOUT: 'LOGOUT',
};

const initialState = {
    isLoggedIn: false,
    data: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case MUTATIONS.SET_USER: {
            const user = action.payload;
            return {
                ...state,
                data: Boolean(user) ? user : null,
                isLoggedIn: Boolean(user),
            };
        }
        case MUTATIONS.LOGOUT: {
            firebase.auth.signOut();
            return {
                ...state,
                data: null,
                isLoggedIn: false,
            };
        }
        default:
            return state;
    }
};

export default user;
