<template>
    <div class="border p-3 rounded" style="width: 18rem;">
        <h4><strong>{{ post.title }}</strong></h4>
        <p class="text-muted">{{ post.lead }}</p>
        <p class="text-right">By {{ post.author.name }} 3 hours ago</p>
    </div>
</template>

<script>
    export default {
        props: {
            post: Object
        }
    }
</script>