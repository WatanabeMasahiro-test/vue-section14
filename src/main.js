import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'


createApp(App)
    .use(router)
    .use(store)
.mount('#app')

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')