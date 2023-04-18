<template>
    <div>
        <h3>Users</h3>
        <div class="border border-info" style="background-color: beige;">
            <router-link to="/">前のページ</router-link>
            <hr>
            <router-link to="/users/1" class="mx-1">ユーザー１</router-link>
            <router-link to="/users/2" class="mx-1">ユーザー２</router-link>
            <hr>
            <!--*** params:は、pathではなくnameならOK ***-->
            <router-link :to="'/users/' + (Number(id) + 1) +'/profile'" class="mx-1">次のユーザー</router-link>
            <router-link :to="{ name: 'users-id-profile', params: { id: (Number(id) - 1) }, query: { lang: 'ja', page: 2 } }" class="mx-1">前のユーザー</router-link>
        </div>
        <hr>
        <h1>User No. 『{{ id }}』</h1>
        <router-view></router-view>
        <div style="height: 700px"></div>
        <router-link 
            id="next-user" 
            :to="{ name: 'users-id-profile', 
                params: {id: (Number(id) - 1)}, 
                query: { lang: 'ja', page: 2 }, 
                hash: '#next-user',
            }" 
            class="mx-1">前のユーザー</router-link>
        <div style="height: 1400px"></div>
    </div>
</template>

<script>
    export default {
        props: [
            'id',
        ],
        watch: {
            // $route(to, from) {
            //     console.log(to);
            //     console.log(from);
            //     console.log("$routeが変わった");
            // }
        },
        // beforeRouteEnter(to, from, next) {
        //     console.log('beforeRouteEnter');
        //     next(vm => {
        //         console.log(vm.id);
        //     })
        // },
        // beforeRouteUpdate(to, from, next) {
        //     console.log('beforeRouteUpdate');
        //     next();
        // },
        // beforeRouteLeave(to, from, next) {
        //     console.log('beforeRouteLeave');
        //     if( !(window.confirm('このページを離れますか??')) ) {
        //         next(false);
        //     } else {
        //         next();
        //     }
        //     next();
        // },
    }
</script>

<style scoped>
</style>
