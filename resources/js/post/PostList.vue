<template>
    <div id="id" class="container mt-5 mb-2">
        <h2 class="text-4xl">All Posts</h2>
        <p v-if="$apollo.loading">Loading posts...</p>
        <div class="row gap-2" v-else>
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
                {
                    posts {
                        id
                        title
                        lead
                        author {
                            name
                        }
                    }
                }
            `
        }
    }
</script>