<script setup>
const mainStore = useMainStore()
const chatStore = useChatStore()
const { errorMsg } = storeToRefs(mainStore)
const isError = computed(() => errorMsg.value != '')
const okHandler = () => {
  mainStore.setErrorMsg('')
  chatStore.$reset()
  let csrfCookie = useCookie('csrf')
  if (!csrfCookie.value) {
    navigateTo('/welcome')
  } else {
    navigateTo('/')
  }
}
</script>
<template>
  <teleport to="body">
    <Setting v-model:visible="mainStore.isSetting" />
  </teleport>
  <main class="h-100vh bg-[#f5f5f5] md:border-x-[1px] md:border-[#E5E5E5]">
    <slot />
  </main>
  <!-- 錯誤警告視窗 -->
  <Teleport to="body">
    <Modal v-model:open="isError" @submit="okHandler">
      <template #title>系統提示</template>
      <template #content>
        {{ errorMsg }}
      </template>
      <template #buttonTxt>我明白了</template>
    </Modal>
  </Teleport>
</template>
