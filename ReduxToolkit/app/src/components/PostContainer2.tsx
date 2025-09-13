import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
    const {data: posts,error,isLoading} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div>
            {isLoading && <h1> Loading ...</h1>}
            {error && <h1> Error</h1>}
            {posts && posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostContainer2;
