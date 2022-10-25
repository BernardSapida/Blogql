<template>
    <div class="container mt-5 mb-2">
        <h2 class="text-4xl mb-4">All Posts</h2>
        <p v-if="$apollo.loading">Loading posts...</p>
        <div class="d-flex flex-wrap justify-content-center gap-2" v-else>
            <PostListItem v-for="post in posts" :key="post.id" :post="post" class="col-3 mx-auto">{{ post.id }} {{ post.title }}</PostListItem>
        </div>
    </div>
</template>

<script>
    import gql from "graphql-tag";
    import PostListItem from "./PostListItem";

    export default {
        components: {
            PostListItem
        },  
        apollo: {
            posts: gql`
                query {
                    posts {
                        id
                        title
                        lead
                        created_at
                        author {
                            id
                            name
                            avatar
                        }
                    }
                }
            `
        },
    }
</script>