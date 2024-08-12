import React from 'react';
import Link from 'next/link';

const getPosts = async () => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            cache: "no-store",
            next: {
                revalidate: 3600,
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
                    <Link href={`/posts/${post.id}`}>
                        <li key={post.id} className='my-4 list-disc'>
                            {post.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Posts;