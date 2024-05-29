<template>
  <div class="bg-primary-color w-full flex justify-center text-white-color">
    <div class="width-90 justify-between flex py-[60px] max-lg:flex-col gap-10">
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-semibold">Industries</h1>
        <ul class="flex flex-col gap-3 font-light text-xl">
          <li>Banking</li>
          <li>Consumer Goods and Distribution</li>
          <li>Communications, Media,</li>
          <li>Education</li>
          <li>Energy, Resources, and Utilities</li>
          <li>Healthcare</li>
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-semibold">Solutions & Resources</h1>
        <ul class="flex flex-col gap-3 font-light text-xl">
          <li>Banking</li>
          <li>Consumer Goods and Distribution</li>
          <li>Communications, Media,</li>
          <li>Education</li>
          <li>Energy, Resources, and Utilities</li>
          <li>Healthcare</li>
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-semibold">About</h1>
        <ul class="flex flex-col gap-3 font-light text-xl">
          <li>Clients</li>
          <li>News</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-lg font-medium">ARON Consulting Services JSC.</h1>
        <ul class="flex flex-col gap-2 font-extralight text-lg">
          <li>10th Floor, 47 Dien Bien Phu St, Dakao Ward, Dist 1, HCMC</li>
          <li>Phone: 028 – 3 9110 987</li>
          <li>Hotline: +84 903 858 605</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-[#0F0F0F] flex justify-center">
    <div class="width-90 flex max-lg:flex-col justify-between items-center py-4 gap-5">
      <img src="@/assets/images/oracle-logo.png" alt="logo" />
      <span class="text-white-color font-extralight text-sm"
        >Copyright © 2023 Aron - Partner Oracle ERP Company in Vietnam. All Rights Reserved.</span
      >
      <div class="flex gap-6">
        <button class="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full">
          <LogoFacebook />
        </button>
        <button class="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full">
          <LogoInLink />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import LogoFacebook from '@/components/icons/LogoFacebook.vue'
import LogoInLink from '@/components/icons/LogoInLink.vue'
import { useHomeStore } from '@/stores/homeStore.js'

// eslint-disable-next-line no-unused-vars
const homeStore = useHomeStore()
</script>
<style scoped></style>
