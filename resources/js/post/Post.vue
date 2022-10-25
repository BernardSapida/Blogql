<template>
    <div class="container mx-auto mt-5 mb-2">
        <p v-if="$apollo.loading">Loading posts...</p>
        <div v-else>
            <p class="mt-5">By <router-link class="text-dark" :to="{ name: 'author', params: { id: post.author.id } }">{{ post.author.name }}</router-link> in <router-link class="text-dark" :to="{ name: 'topic', params: { slugs: post.topic.slug } }">{{ post.topic.name }}</router-link> • {{ post.created_at | moment("from", "now") }}</p>
            <h1 class="my-4"><strong>{{ post.title }}</strong></h1>
            <p>{{ post.content }}</p>
            <div class="row my-4 align-items-center">
                <div class="col-auto">
                    <img :src="'/images/' + post.author.avatar" class="rounded-circle" height="75" width="75" alt="">
                </div>
                <div class="col-auto">
                    <h5 class="m-0"><strong>Written by {{ post.author.name }}</strong></h5>
                    <p class="m-0">Published in <router-link class="text-dark" :to="{ name: 'topic', params: { slugs: post.topic.slug } }">{{ post.topic.name }}</router-link> on {{ post.created_at | moment("MMM DD YYYY") }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gql from "graphql-tag";

    export default { 
        apollo: {
            post: {
                query: gql`
                    query($id: ID!) {
                        post(id: $id) {
                            id
                            title
                            content
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
                `,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                }
            }
        }
    }
</script>