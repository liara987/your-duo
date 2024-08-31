import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CardType } from '@/types/CardType'

export const useCardStore = defineStore('cardStore', () => {
  const card = ref<CardType>()

  return { card }
})
