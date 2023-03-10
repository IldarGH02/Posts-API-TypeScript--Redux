import React, { useEffect } from "react";
import routeMain from "./routes";

import { useDispatch, useSelector } from 'react-redux'
import { loadPosts } from "store/posts/actions";
import { selectPosts } from "store/posts/selectors";

import PostsList from "components/PostsList";
import PageTitle from "components/PageTitle";

import './styles.scss'

const MainPage = () => {
    const dispatch = useDispatch();
    const postsList = useSelector(selectPosts)

    useEffect(() => {
        dispatch<any>(loadPosts());            
    }, [dispatch])

    return (
        <section className="mainPage">
          <div className="container">
            <PageTitle
                    title={
                        <h2>Список из шести постов</h2>
                    }
                />
            {postsList.length > 0 && <PostsList list={postsList.slice(0, 6)}/>} 
          </div> 
        </section>
    )
}

export {routeMain}

export default MainPage