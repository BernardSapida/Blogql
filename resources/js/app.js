import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const router = new VueRouter({
    mode: "history",
    routes,
});

Vue.prototype.$appEvents = new Vue();

new Vue({
    apolloProvider,
    router,
}).$mount("#app");
