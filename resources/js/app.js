import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import './bootstrap';

window.Vue = Vue;
Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

Vue.prototype.$appEvents = new Vue();

const app = new Vue({
    router,
    // render: h => h(App),
}).$mount('#app')