import {AnyAction} from 'redux'
import { IStore } from "./types"

const initialState = {
    list: [],
}

const postsReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'posts/setPosts':
            return {...state, list: [...action.payload]}
        default:
            return state
    }
}

export default postsReducer