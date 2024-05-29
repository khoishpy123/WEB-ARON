<template>
  <div class="flex justify-center bg-black">
    <div
      class="width-50 max-lg:w-[80%] max-xl:w-[80%] flex max-lg:items-center flex-col justify-center gap-8 text-white-color py-[100px]"
    >
      <h1 class="text-5xl font-semibold">{{ t('countdown.headerCountdown') }}</h1>
      <div class="flex gap-10 items-center max-lg:flex-col">
        <div class="flex w-1/4 max-lg:w-full">
          <span class="text-7xl w-[92px]">{{ formattedDays }}</span>
          <span class="flex items-end ml-1 text-lg">{{ t('countdown.daysCountdown') }}</span>
        </div>
        <div class="flex w-1/4 max-lg:w-full">
          <span class="text-7xl w-[92px]">{{ formattedHours }}</span>
          <span class="flex items-end ml-1 text-lg">{{ t('countdown.hoursCountdown') }}</span>
        </div>
        <div class="flex w-1/4 max-lg:w-full">
          <span class="text-7xl w-[92px]">{{ formattedMinutes }}</span>
          <span class="flex items-end ml-1 text-lg">{{ t('countdown.minutesCountdown') }}</span>
        </div>
        <div class="flex w-1/4 max-lg:w-full">
          <span class="text-7xl w-[92px]">{{ formattedSeconds }}</span>
          <span class="flex items-end text-lg">{{ t('countdown.secondsCountdown') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHomeStore } from '@/stores/homeStore.js'

// eslint-disable-next-line no-unused-vars
const homeStore = useHomeStore()

const { t } = useI18n()

const targetDate = new Date(new Date().getFullYear(), 5, 25, 0, 0, 0) // June 25th of the current year
const now = ref(new Date())
const timeRemaining = ref(targetDate - now.value)

const updateCountdown = () => {
  now.value = new Date()
  timeRemaining.value = targetDate - now.value
}

const days = computed(() => Math.floor(timeRemaining.value / (1000 * 60 * 60 * 24)))
const hours = computed(() =>
  Math.floor((timeRemaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
)
const minutes = computed(() => Math.floor((timeRemaining.value % (1000 * 60 * 60)) / (1000 * 60)))
const seconds = computed(() => Math.floor((timeRemaining.value % (1000 * 60)) / 1000))
let interval

// Functions to format numbers with leading zeros
const formatNumber = (number) => number.toString().padStart(2, '0')

const formattedDays = computed(() => formatNumber(days.value))
const formattedHours = computed(() => formatNumber(hours.value))
const formattedMinutes = computed(() => formatNumber(minutes.value))
const formattedSeconds = computed(() => formatNumber(seconds.value))

onMounted(() => {
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
<style></style>
