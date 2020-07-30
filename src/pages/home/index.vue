<template>
  <div class="home-container">
    
    Home 
    <h1 @click="$router.push('/agent')">
      go to Agent
    </h1>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  created () {
    console.log('Home Created')
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>

</style>