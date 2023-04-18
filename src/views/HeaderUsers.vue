<template>
    <nav class="nav border">
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
            :to="'/users/' + Number($route.params.id)" 
            active-class="link--active bg-dark" 
            class="nav-link text-light bg-secondary border"
        >Users</router-link>

        <!-- <a href="/" class="nav-link text-light bg-secondary border">Home</a>
        <a href="/users" class="nav-link text-light bg-secondary border">Users</a> -->
    </nav>
    <p @click="test($route.params)" class="w-75 mx-auto my-2 bg-primary">コンソールへ$route.paramsを表示</p>
</template>


<script>
export default {
    methods: {
        test(param) {
            console.log(param);
        }
    },
}
</script>


<style scoped>
    .link--active {
    font-size: 20px;
    }
</style>