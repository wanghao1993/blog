<template>
  <div class="header">
    
  </div>
</template>

<script lang="ts" setup>
import { useData } from "vitepress";
const data = useData()

console.log(data)
</script>

<style lang="less" scoped>
  .header {
    height: 50px
  }
</style>

