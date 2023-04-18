import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
// import UsersView from '@/views/UsersView.vue'
// import UsersPosts from '@/views/UsersPost.vue'
// import UsersProfile from '@/views/UsersProfile.vue'
// import HeaderHome from '@/views/HeaderHome.vue'
// import HeaderUsers from '@/views/HeaderUsers.vue'
const HomeView      = () => import( /* webpackChunkName : HomeView */       '@/views/HomeView.vue'      );
const UsersView     = () => import( /* webpackChunkName : UsersView */      '@/views/UsersView.vue'     );
const UsersPosts    = () => import( /* webpackChunkName : UsersPosts */     '@/views/UsersPost.vue'     );
const UsersProfile  = () => import( /* webpackChunkName : UsersProfile */   '@/views/UsersProfile.vue'  );
const HeaderHome    = () => import( /* webpackChunkName : HeaderHome */     '@/views/HeaderHome.vue'    );
const HeaderUsers   = () => import( /* webpackChunkName : HeaderUsers */    '@/views/HeaderUsers.vue'   );
// import NotFound from '@/views/NotFound.vue'    ⏪存在しないページへのアクセス

const routes = [
    {
        path      : '/',
        name      : 'homeView',
        components:
            {    // オブジェクトにして複数形component"s"
                default     : HomeView,
                header      : HeaderHome,
            },
        // beforeEnter(to, from, next) {
        //     next();
        // }
    },
    {
        path      : '/users/:id',
        name      : 'usersView',
        components:
            {    // オブジェクトにして複数形component"s"
                default     : UsersView,
                header      : HeaderUsers,
            },
        props     :
            {
                default     : true,
                header      : false,
            },
        children  : [
            {
                path        : 'posts',
                component   : UsersPosts,
            },
            {
                path        : 'profile',
                name        : 'users-id-profile',
                component   : UsersProfile,
            },
        ],
    },
    {
        path      : '/index_redirect',
        redirect  :
            {
                path        : '/',
            },
    },
    {
        path      : '/:pathMatch(.*)*',
        name      : 'NotFound',
        // component : NotFound,    ⏪存在しないページへのアクセス
        redirect  : '/',
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return new Promise(resolve => {
        //     this.app.$root.$once('triggerScroll', () => {
        //         let position = { x: 0, y: 0 };
        if (to.hash) {
            return {
                // el: to.hash,
                top: 700,
                behavior: 'smooth',
                selector: '#next-user',
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {
                top: 0
            }
        }
    },
    // console.log('scrollBehavior');
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);
    // if (savedPosition) { return savedPosition }
    // if (to.hash) { return { selector: to.hash } }
    // return {
    //     // x: 0, y: 0
    //     selector: '#next-user',
    //     offset: { x: 0, y: 100 }
    // }
})

// router.beforeEach((to, from, next) => {
//     // console.log("global-beforeEach");
//     if( to.path === '/users/1' ) {
//         next({ path: '/' });
//     }
//     next();
// })


export default router