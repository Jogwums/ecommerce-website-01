import userTypes from './userTypes'

const initialState = {
    currentUser: null,
    signInSuccess: false
}

const userReducer = (state= initialState, action) => {
    switch(action.type){
        case userTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        case userTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                signInSuccess: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;

