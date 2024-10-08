import React from 'react';
import Link from 'next/link';

const getPosts = async () => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            cache: "no-cache",
            next: {
                tags: ["posts"],
            },
        }
    );

    if (!response.ok) {
        throw new Error('Falló la obtención de datos');
    }

    return response.json();;
};


const Posts = async () => {

    const posts = await getPosts()

    return (
        <div className='container m-auto mt-6'>
            <h1>Posts</h1>
            <hr />
            <ul>
                {posts.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        <li className='my-4 list-disc'>
                            {post.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Posts;