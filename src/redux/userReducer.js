import axios from 'axios'

//INTIAL STATE
const initialState = {
    user: {},
    loggedIn: false

}

//ACTION CONSTANTS
const UPDATE_USER = 'UPDATE_USER'
const LOGOUT_USER = 'LOGOUT_USER'





//ACTION CREATORS

export const updateUser = (userData) => {
    return {
        type: UPDATE_USER,
        payload: userData
    }
}


export function logout() {
    return{
        type: LOGOUT_USER
    }
}

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                user:{},
                loggedIn:false
            }
        default:
            return state
    }
}
