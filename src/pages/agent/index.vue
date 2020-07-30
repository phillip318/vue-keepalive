<template>
  <div class="agent-container">
    <p style="margin: 0 0 50px 0; text-align: left;" @click="$router.back()">《back</p>
    Agent
    <h1 @click="$router.push('/detail')">
      go to Detail
    </h1>
  </div>
</template>
<script>
import store from '../../store'
export default {
  name: 'Agent',
  data () {
    return {
      loaded: false
    }
  },
  created () {
    console.log('Agent Created')
    this.loaded = true
  },
  beforeRouteEnter (to, from, next) {
    store.commit('SET_KEEP_ALIVE', { flag: true, routeName: to.name })
    next()
  },
  beforeRouteLeave(to, from, next) {
    (to.path === '/') && store.commit('SET_KEEP_ALIVE', { flag: false, routeName: from.name })
    next()
  },
  methods: {
  }
}
</script>
<style scoped>
.agent-container {
  height: 1400px;
}
</style>