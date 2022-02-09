<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-footer>
        <p style="text-align: center; font-size: 12px">
            <a href="https://beian.miit.gov.cn/">粤ICP备2022001810号</a>
        </p>
    </template>
  </Layout>
</template>