<script setup lang="ts">
import { ref } from 'vue'

const value = ref('');
</script>

<template>
  <div id="indexView">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    进入首页
  </div>
</template>

<style scoped>

</style>
