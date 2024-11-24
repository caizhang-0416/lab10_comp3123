// src/reducers/userReducer.js

const initialState = {
    name: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, name: action.payload.name };
        case 'LOGOUT_USER':
            return { ...state, name: '' };
        default:
            return state;
    }
};

export default userReducer;
