<template>
    <div class="container mx-auto mt-5 mb-2" style="width: 700px;">
        <p v-if="$apollo.loading">Loading posts...</p>
        <div v-else>
            <p class="mt-5">By {{ post.author.name }} in {{ post.topic.name }} • 3 hours ago</p>
            <h1 class="my-4"><strong>{{ post.title }}</strong></h1>
            <p>{{ post.content }}</p>
            <div class="row my-4 align-items-center">
                <div class="col-auto">
                    <img :src="'/images/' + post.author.avatar" class="rounded-circle" height="75" width="75" alt="">
                </div>
                <div class="col-auto">
                    <h5 class="m-0"><strong>Written by {{ post.author.name }}</strong></h5>
                    <p class="m-0">Published in {{ post.topic.name }} on Dec 17, 2022</p>
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