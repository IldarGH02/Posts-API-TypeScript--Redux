import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import routeMain from "./routes";

import { useSelector } from 'react-redux';
import { selectPosts } from "store/posts/selectors";

import { ID } from "types/ID";
import { IPostsDetail } from "types/IPostsDetail";

import './styles.scss'

const PostsDetail = () => {
    const {id} = useParams<ID>()
    const [post, setPost] = useState<IPostsDetail | undefined>(undefined)    

    const postsList = useSelector(selectPosts)

    useEffect(() => {
        const currentPost = postsList?.find((item: IPostsDetail) => (item.id).toString() === id)
            setPost(currentPost)
    },[id, postsList])

    return (
        <section className="postsDetail">
            <div className="container">
                {post ? (
                    <div className="postsDetailWrapper">
                        <h2 className="postDetail__title">{post.title}</h2>
                        <p className="postDetail__descr">{post.body}</p>
                    </div>
                ) 
                : <></>}
            </div>
        </section>
    )
}

export {routeMain}

export default PostsDetail