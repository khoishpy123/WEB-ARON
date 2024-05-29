import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore('useHomeStore', () => {
    const isEnglish = ref(true)

    return {
        isEnglish
    }
})