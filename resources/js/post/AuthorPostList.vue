<template>
    <div class="container mt-5 mb-2">
        <h2 class="text-4xl mb-4">
            <router-link class="text-dark" :to="{ name: 'index' }">All posts</router-link> / {{ user.name }}
        </h2>
        <p v-if="$apollo.loading">Loading posts...</p>
        <div class="row gap-2" v-else>
            <PostListItem v-for="post in user.posts" :key="post.id" :post="post" class="col-3 mx-auto">{{ post.id }} {{ post.title }}</PostListItem>
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
            user: {
                query: gql`
                    query($id: ID!) {
                        user(id: $id) {
                            id
                            name
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
                                topic {
                                    name
                                    slug
                                }
                            }
                        }
                    }
                `,
                variables() {
                    return {
                        id: this.$route.params.id
                    };
                }
            }
        }
    }
</script>