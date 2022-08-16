<template>
  <div>
    <frontMobile/>
    <kitchenBack/>
  </div>
</template>

<script>
  import frontMobile from "./components/frontMenu.vue"
  import kitchenBack from "./components/kitchenMenu.vue"

  export default{
    name: 'App',
    components: {
      frontMobile,
      kitchenBack
    }
  }

</script>

<style>

</style>
