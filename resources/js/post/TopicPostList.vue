<template>
    <div class="container mt-5 mb-2">
        <p v-if="$apollo.loading">Loading posts...</p>
        <div class="row gap-2" v-else>
            <h3 class="text-4xl mb-4">
                <router-link class="text-dark" :to="{ name: 'index' }">All posts</router-link> / 
                <span v-if="topic.name != undefined">{{ topic.name }}</span>
            </h3>
            <PostListItem v-for="post in topic.posts" :key="post.id" :post="post" class="col-3 mx-auto">{{ post.id }} {{ post.title }}</PostListItem>
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
            topic: {
                query: gql`
                    query($slug: String!) {
                        topic(slug: $slug) {
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
                        slug: this.$route.params.slugs
                    };
                }
            }
        }
    }
</script>