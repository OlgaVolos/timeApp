import {LOGIN, SET_TOKEN} from "./actionTypes";

const action = (type, payload) => ({type, payload})

export const doLogin  = () => action(LOGIN);
export const setToken  = (token) => action(SET_TOKEN, token);
