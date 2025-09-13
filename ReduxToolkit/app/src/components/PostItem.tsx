import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div style={{border: '1px solid green',padding:'5px',margin:'8px',
        borderRadius:'12px'
        }}>
            {post.id} . {post.title}
            <button style={{margin:'4px'}}>deleted</button>
        </div>
    );
};

export default PostItem;
