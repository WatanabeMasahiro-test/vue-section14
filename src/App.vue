<template>
  <div class="container mt-4">
    <div class="row">
      <router-view name="header"></router-view>
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<script>
  import './assets/animate.css/animate.min.css'
  import './assets/css/style.css'

  export default {
    name: 'App',
    components: {

    },
    data: () => ({

      }),
      computed: {
      },
      methods: {
        // testFunc() {
        //   return false;
        // },
        // beforeEnter()   {},
        // enter(el, done)   {},
        // afterEnter()    {},
        // enterCancelled(){},
        // beforeLeave()   {},
        // leave(el, done)         {},
        // afterLeave()    {},
        // leaveCancelled(){},
    },
  }
</script>

<style scoped>
.link--active {
  font-size: 20px;
}

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  /* .fade-enter-to {} */
  /* .fade-leave-from {} */
  .fade-leave-active {

    transition: opacity 1s;
  }
  .fade-leave-to {
    opacity: 0;
  }
  /* @keyframes __-in {
    from {}
    to {}
  } */
  
</style>
