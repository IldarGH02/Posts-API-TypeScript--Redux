import { IStore } from './types'

export const selectPosts = (state: {postsReducer: IStore}): IStore['list'] => state.postsReducer.list;