import {useEffect, useState} from 'react';
import { getPosts as listPosts } from "../actions/offerActions";
import {POST} from "./POST";
import {useDispatch,useSelector} from 'react-redux'
import './Posts.css';
const Posts=()=>{

    const dispatch = useDispatch();

    const getPosts = useSelector((state) => state.getPosts);
    const { posts, loading, error } = getPosts;
  
    useEffect(() => {
      dispatch(listPosts());
    }, [dispatch]);
  
        return(
            <div className="contain">
           <div className="cards"> {posts.map((post)=>
            <POST className="post"
            key={post._id}
            progLang={post.progLang}
            workTime={post.workTime}
            location={post.location}
            description={post.description} />
            )}</div></div>
        );
   
        
}
export default Posts;