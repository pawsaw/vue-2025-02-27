<script setup lang="ts">
import type { Book } from '@/domain/books'
import { computed, ref } from 'vue'
import ConfirmationDialog from '@/components/ConfirmationDialog.vue'

interface Props {
  book: Book
}

const props = defineProps<Props>()

interface Emits {
  (e: 'read', event: Book): void
}

const emit = defineEmits<Emits>()

const read = () => emit('read', props.book)

const buttonText = computed(() => (props.book.read ? '✅' : 'Read'))

const confirmationDialogOpen = ref(false)

const openReadConfirmationDialog = () => (confirmationDialogOpen.value = true)
const closeReadConfirmationDialog = () => (confirmationDialogOpen.value = false)

const acceptReadConfirmation = () => {
  read()
  closeReadConfirmationDialog()
}

const rejectReadConfirmation = () => {
  closeReadConfirmationDialog()
}
</script>
<template>
  <tr>
    <td>
      <button @click="openReadConfirmationDialog">{{ buttonText }}</button>
      <ConfirmationDialog
        :open="confirmationDialogOpen"
        @accepted="acceptReadConfirmation"
        @rejected="rejectReadConfirmation"
      >
        <template #header>
          <h2>Read book?</h2>
        </template>
        <template #content>
          <div>Do you realy want to read the book '{{ book.title }}'?</div>
        </template>
      </ConfirmationDialog>
    </td>
    <td>
      <RouterLink :to="{ name: 'book-detail', params: { isbn: book.isbn } }">{{
        book.isbn
      }}</RouterLink>
    </td>
    <td>{{ book.title }}</td>
    <td>{{ book.author }}</td>
  </tr>
</template>
