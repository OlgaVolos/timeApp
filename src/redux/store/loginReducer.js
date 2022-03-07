import {LOGIN, SET_TOKEN} from "./actionTypes";

const initialState = {isLogged: false, token: null}

function login(state) {
    return {
        ...state,
        isLogged: true
    }
}

function setToken(state, {payload}) {
    return {
        ...state,
        token: payload
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return login(state);
        case SET_TOKEN:
            return setToken(state, action)
        default:
            return state;
    }
}


