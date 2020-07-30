<template>
  <div id="app">
    <keep-alive :include="GET_KEEP_ALIVE">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
  },
  computed: {
    ...mapGetters(['GET_KEEP_ALIVE'])
  },
  watch: {
    'GET_KEEP_ALIVE': function (newVal) {
      console.log([...newVal])
    }
  },
}
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
