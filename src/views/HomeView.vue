<template>
    <div>
        <h3>Home</h3>
        <router-link to="/users/1/profile">次のページ</router-link>
        <div class="border my-2 p-2">
            <h5>ボタンクリックでのページ遷移</h5>
            <button @click="toUsers()">Usersページへ遷移後、リダイレクトでHOMEへ戻る</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toUsers() {
                // this.$router.push( 'users' );
                this.$router.push({ path : 'users' });  // リダイレクト設定で、users/以降の存在しないページはHOMEへ戻る
            }
        }
    }
</script>

<style scoped>
</style>