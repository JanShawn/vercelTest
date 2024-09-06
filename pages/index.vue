<script setup>
// props

// emits

// 自訂變數
const data = ref('')
const res = await $fetch('/llm/getLLMList')
data.value = res

// 自訂函式

// lifeCycle
</script>
<template>
  <h2>LLM清單：</h2>
  <div v-for="item in data">{{ item }}</div>
</template>
<style scoped></style>
