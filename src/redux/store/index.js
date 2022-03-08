import {createStore, combineReducers} from "redux";
import loginReducer from './loginReducer'

const rootReducer = combineReducers({loginReducer});


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

