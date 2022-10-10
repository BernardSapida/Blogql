import Post from './post/Post';
import PostList from './post/PostList';

export default [
    {
        path: '/',
        name: 'index',
        component: Post 
    },
    {
        path: '/post',
        name: 'post',
        component: PostList
    },
]