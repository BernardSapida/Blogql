<template>
    <div>
        <h1>Hello App!</h1>
        <p>
            <router-link to="/">Go to Foo</router-link>
            <router-link to="/about">Go to Bar</router-link>
        </p>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app",
};
</script>

<style scoped></style>
