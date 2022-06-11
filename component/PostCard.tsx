import React from 'react'

interface PostProps
{
    title: string;
    excerpt: string;
}

const PostCard: React.FC<PostProps> = ({title, excerpt}) => (
    <div>
        {title}
        {excerpt}
    </div>
)

export default PostCard