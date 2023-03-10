import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

import postsReducer from './posts/reducer'

const rootReducer = combineReducers({
    postsReducer,
})

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;