import React, { useEffect } from "react";
import routeMain from "./routes";

import PageTitle from "components/PageTitle";
import PostsList from "components/PostsList";

import { useDispatch, useSelector } from 'react-redux'
import { loadPosts } from "store/posts/actions";
import { selectPosts } from "store/posts/selectors";

import './styles.scss'

const PostsListPage = () => {
    const dispatch = useDispatch();
    const postsList = useSelector(selectPosts)

    useEffect(() => {
        dispatch<any>(loadPosts());            
    }, [dispatch])

    return (
        <section className="PostsListPage">
            <div className="container">
                <PageTitle
                    title={
                        <h2>Полный список постов</h2>
                    }
                />
                {postsList.length > 0 && <PostsList list={postsList}/>} 
            </div> 
        </section>
    )
}

export {routeMain}

export default PostsListPage