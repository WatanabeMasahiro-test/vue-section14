<template>
    <div>
        <h3>Home</h3>
        <router-link to="/users/1/profile">次のページ</router-link>
        <div class="border my-2 p-2">
            <h5 class="text-center">ボタンクリックでのページ遷移</h5>
            <button @click="toUsers()" class="rounded">Usersページへ遷移後、リダイレクトでHOMEへ戻る</button>
            <hr>
            <pre class="conut_p bg-warning h4 text-center rounded-pill">{{ singleCount }}</pre>
            <pre class="conut_p bg-danger h4 text-center rounded-pill">{{ doubleCount }} / 2</pre>
            <pre class="conut_p bg-info h4 text-center rounded-pill">{{ tripleCount }} / 3</pre>
            <input 
                type="text" 
                v-model="message"
            >
            <!--**
                *  【v-modelの代替】
                *    :value="message" 
                *    @input="updateMessage"
                **-->
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        // computed: mapGetters({
        //     myComponentDoubleCount: 'doubleCount',
        // }),
        computed: {
            count() {
                return this.$store.state.count;
            },
            ...mapGetters(['singleCount', 'doubleCount', 'tripleCount',]),
            /**
             *  doubleCount() {
             * return this.$store.getters["count/doubleCount"];
             */
            /**
             *  【v-modelの代替】
             *    message() {
             *      return this.$store.getters.message;
             *    }
             **/ 
            message: {
                get() {
                    return this.$store.getters.message;
                },
                set(value) {
                    this.$store.dispatch('updateMessage', value);
                },
            }
            // count() {
            //     return this.$store.state.count;
            // },
            // doubleCount() {
            //     // return this.$store.state.count * 2;
            //     return this.$store.getters.doubleCount;// ⏪store/index.jsのgetterで2倍
            // },
            // tripleCount() {
            //     return this.$store.getters.tripleCount;
            // },
        },
        methods: {
            updateMessage(e) {
                this.$store.dispatch('updateMessage', e.target.value)
            },
            toUsers() {
                // this.$router.push( 'users' );
                this.$router.push({ path : 'users' });  // リダイレクト設定で、users/以降の存在しないページはHOMEへ戻る
            }
        }
    }
</script>

<style scoped>
.conut_p {
    width: 100px;
}
</style>