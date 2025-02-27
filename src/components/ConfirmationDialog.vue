<script setup lang="ts">
defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'accepted'): void
  (e: 'rejected'): void
}>()

const accept = () => emit('accepted')
const reject = () => emit('rejected')
</script>
<template>
  <dialog :open="open">
    <article>
      <slot name="header">Do you really want to do this? </slot>
      <slot name="content">Realy?</slot>
    </article>
    <footer class="footer">
      <button @click="accept">Accept</button>
      <button @click="reject" class="secondary">Cancel</button>
    </footer>
  </dialog>
</template>
<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
