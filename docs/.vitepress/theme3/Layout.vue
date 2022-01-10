<template>
  <MyHeader></MyHeader>
  <Content/>
</template>

<script lang='ts' setup>
import MyHeader from './components/header.vue'
import { useData } from "vitepress";

const data = useData()

console.log(data.theme.value.nav)
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>