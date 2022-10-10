// import Post from './Post';
// import PostList from './PostList';

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

export default [
    {
        path: '/',
        name: 'index',
        component: Home 
    },
    {
        path: '/about',
        name: 'post',
        component: About
    },
]