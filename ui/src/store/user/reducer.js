export const MUTATIONS = {
    SET_USER: 'USER_SET_USER',
};

const initialState = {
    isLoggedIn: false,
    user: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case MUTATIONS.SET_USER: {
            const user = action.payload;
            return {
                ...state,
                user: Boolean(user) ? user : null,
                isLoggedIn: Boolean(user),
            };
        }
        default:
            return state;
    }
};

export default user;
