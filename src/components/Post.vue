<template>
  <div class="p-5 mx-auto flex flex-col shadow-md">
    <div class="font-semibold">User {{ userId }}</div>
    <div class="text-xl">{{ title }}</div>
    <div>{{ body }}</div>
  </div>
</template>

<script>
export default {
  props: [ 'userId', 'title', 'body' ] 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
