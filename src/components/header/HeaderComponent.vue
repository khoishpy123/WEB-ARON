<template>
  <div class="bg-primary-color w-full h-16 flex justify-center text-white-color fixed z-50">
    <div class="width-90 justify-between flex items-center">
      <div class="flex items-center gap-2">
        <LogoIcon></LogoIcon>
        <span>15th Anniversary</span>
      </div>
      <Button class="flex gap-2 items-center" @click="toggle" link
        ><span class="text-white-color">{{ language }}</span
        ><AngleDownIcon class="max-sm:hidden"
      /></Button>
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AngleDownIcon from '@/components/icons/AngleDownIcon.vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import { useHomeStore } from '@/stores/homeStore.js'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line no-unused-vars
const homeStore = useHomeStore()
const { locale } = useI18n()
const menu = ref()
const language = ref('English')
const items = ref([
  {
    label: 'English',
    command: () => {
      locale.value = 'en'
      language.value = 'English'
    }
  },
  {
    label: 'Vietnamese',
    command: () => {
      locale.value = 'vi'
      language.value = 'Vietnamese'
    }
  }
])

const toggle = (event) => {
  menu.value.toggle(event)
}
</script>
<style></style>
