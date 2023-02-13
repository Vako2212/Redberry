<template>
  <div class="flex items-center text-center px-6 py-3">
    <div class="w-1/12"></div>
    <div class="w-11/12 flex justify-between mr-12 pb-2">
     <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WrapperLayout",

}
</script>

<style scoped>

</style>