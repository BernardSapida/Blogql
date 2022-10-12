import Post from './post/Post';
import PostList from './post/PostList';

export default [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
]