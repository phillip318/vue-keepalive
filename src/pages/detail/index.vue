<template>
  <div class="detail-container">
    <p style="margin: 0 0 50px 0; text-align: left;" @click="$router.back()">《back</p>
    Detail
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data () {
    return {

    }
  },
  created () {
    console.log('Detail Created')
  },
  methods: {
    
  }
}
</script>
<style scoped>
.detail-container {
  
}
</style>