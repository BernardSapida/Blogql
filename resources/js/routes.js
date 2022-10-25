import Post from './post/Post';
import PostList from './post/PostList';
import TopicPostList from './post/TopicPostList';
import AuthorPostList from './post/AuthorPostList';

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
    {
        path: '/topics/:slugs',
        name: 'topic',
        component: TopicPostList
    },
    {
        path: '/author/:id',
        name: 'author',
        component: AuthorPostList
    }
]