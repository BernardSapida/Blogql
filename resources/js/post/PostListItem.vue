<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5>
                <router-link class="card-title text-dark text-decoration-none" :to="{name: 'post', params: {id: post.id}}">
                    <strong>{{ post.title }}</strong>
                </router-link>
            </h5>
            <p class="card-text">{{ post.lead }}</p>
            <div class="d-flex align-items-center">
                <img class="d-block rounded-circle" :src="'/images/' + post.author.avatar" width="50" height="50" alt="">
                <div class=" ms-2">
                    <p class="m-0 fw-semibold">By <router-link class="text-dark" :to="{ name: 'author', params: { id: post.author.id } }">{{ post.author.name }}</router-link></p>
                    <p class="m-0 text-muted">{{ post.created_at | moment("from", "now") }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: Object
        }
    }
</script>