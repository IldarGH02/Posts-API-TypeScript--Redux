import {Dispatch} from 'redux'
import getPosts from "services/getPosts"

import { IStore } from './types'

export const setPostsAction = (list: IStore['list']) => {
    return {
        type: 'posts/setPosts',
        payload: list
    }   
}

export const loadPosts = () => async(dispatch: Dispatch) => {
    try {
        const response = await getPosts();
        dispatch(setPostsAction(response.data));

    } catch (e) {
        console.log(e, 'Произошла ошибка')
    }
} 