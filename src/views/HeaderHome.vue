<template>

    <div>
        <button @click="increment(1)" class="btn btn-primary mx-1 px-4">+1</button>
        <!-- <button @click="increment(1                             )" class="btn btn-primary mx-1 px-4">+1</button> -->
        <button @click="decrement(1)" class="btn btn-success mx-1 px-4">-1</button>
        <!-- <button @click="decrement(this.$store.state.defaultCount)" class="btn btn-success mx-1 px-4">-1</button> //⏪ミューテーションの書き方-->
    </div>
    <nav class="nav border animate__animated animate__bounce">
        <!--**
            * <a>タグではなく、<router-link>を使用
            * exact属性は、Vue Router ver4.xではrouter-link-exact-activeクラスがデフォルトでつく
            ** -->
        <router-link 
            to="/" 
            active-class="link--active bg-dark" 
            class="nav-link text-light bg-secondary border"
        >Home</router-link>
        <router-link 
            to="/users/0/profile?lang=ja&page=2#next-user" 
            active-class="link--active bg-dark" 
            class="nav-link text-light bg-secondary border"
        >Users</router-link>

        <!-- <a href="/" class="nav-link text-light bg-secondary border">Home</a>
        <a href="/users" class="nav-link text-light bg-secondary border">Users</a> -->
    </nav>
</template>


<script>
/**
 *  マップミューテーションの処理
 *  import { mapMutations } from 'vuex'
 **/
    // マップアクションズの処理
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions(['increment', 'decrement',]),
            // increment() { // ⏪アクションの書き方(dispatch)【非同期処理を含む処理】
            //     this.$store.dispatch('increment', 1);
            // },
            /**
             *  マップの処理
             *  ...mapMutations(['increment', 'decrement'])
             **/
            // increment() {
            //     this.$store.state.count++;
            // },
            /**
             * decrement() { // ⏪ミューテーションの書き方(commit)
             *     this.$store.commit('decrement', 1);
             * },
             */
        },
    }
</script>


<style scoped>
    .link--active {
    font-size: 20px;
    }

</style>