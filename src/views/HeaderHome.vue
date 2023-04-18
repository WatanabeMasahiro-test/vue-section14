<template>
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


<style scoped>
    .link--active {
    font-size: 20px;
    }
</style>