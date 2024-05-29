<template>
  <div>
    <!-- Header -->
    <HeaderComponent />
    <div class="bg-[#12104f] w-screen h-screen pt-16 flex items-center justify-center">
      <img src="@/assets/images/banner.png" alt="banner" class="object-cover" />
    </div>
  </div>

  <!-- OUR ACHIEVEMENTS -->
  <div
    class="w-full flex justify-center text-white-color bg-[url('@/assets/images/bg-our.jpg')] bg-no-repeat object-cover bg-cover bg-center max-lg:h-screen"
  >
    <div
      class="width-90 flex justify-center items-center content-between flex-col gap-8 py-[100px]"
    >
      <h1 class="text-5xl font-semibold max-md:text-3xl">
        {{ t('achievements.headerAchievements') }}
      </h1>
      <p class="text-lg">{{ t('achievements.describeAchievements') }}</p>
      <div class="w-full flex justify-between max-lg:items-center max-lg:flex-col max-lg:gap-10">
        <div class="flex flex-wrap">
          <span class="text-7xl">15</span>
          <span class="mt-14 ml-3 text-lg">{{ t('achievements.years') }}</span>
        </div>
        <div class="flex flex-wrap">
          <span class="text-7xl">1000</span>
          <span class="mt-14 ml-3 text-lg">{{ t('achievements.customers') }}</span>
        </div>
        <div class="flex flex-wrap">
          <span class="text-7xl">100</span>
          <span class="mt-14 ml-3 text-lg">{{ t('achievements.consultant') }}</span>
        </div>
        <div class="flex flex-wrap">
          <span class="text-7xl">50</span>
          <span class="mt-14 ml-3 text-lg">{{ t('achievements.industries') }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Our Invitation -->
  <div
    class="flex justify-center bg-black bg-[url('@/assets/images/bg-our.jpg')] bg-no-repeat object-cover bg-cover bg-center"
  >
    <div class="width-80 flex flex-col justify-center gap-4 text-white-color py-[100px]">
      <h1 class="text-5xl font-semibold">{{ t('invitation.headerInvitation') }}</h1>
      <div>
        <p class="text-lg">
          {{ t('invitation.contentOneInvitation') }}
        </p>
        <p class="text-lg">
          {{ t('invitation.contentTwoInvitation') }}
        </p>
      </div>
      <div>
        <a href="#send-mail-form">
          <Button
            :label="t('acceptToJoinBtn')"
            class="bg-button-color border-none rounded-xl py-3.5 px-8 hover:bg-button-hover-color"
          >
          </Button>
        </a>
      </div>
    </div>
  </div>

  <!-- Address and times -->
  <div class="flex justify-center">
    <div class="width-80 flex justify-center gap-14 py-[100px] max-lg:flex-col">
      <div class="flex justify-center">
        <img src="@/assets/images/local-image.gif" alt="image" class="object-cover w-[419px]" />
      </div>
      <div class="border-solid border-r-2 max-lg:border-b-2"></div>
      <div class="flex justify-center">
        <div class="flex flex-col gap-4 justify-center">
          <h1 class="text-5xl font-semibold">
            {{ t('addressAndTimes.headerAddressAndTimes') }}
          </h1>
          <div class="flex items-center gap-2 text-lg font-medium">
            <div class="flex justify-center items-center w-10"><LocalIcon /></div>
            : Ho Chi Minh City
          </div>
          <div class="flex items-center gap-2 text-lg font-medium">
            <div class="flex justify-center items-center w-10"><ClockIcon /></div>
            : 06:00PM
          </div>
          <div>
            <a href="#send-mail-form">
              <Button
                :label="t('acceptToJoinBtn')"
                class="bg-button-color border-none rounded-xl py-3.5 px-8 hover:bg-button-hover-color"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Anniversary countdown -->
  <CountDownComponent></CountDownComponent>

  <!-- Full name form send to mail -->
  <FormComponent></FormComponent>

  <!-- Footer -->
  <FooterComponent></FooterComponent>
</template>
<script setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
import CountDownComponent from '@/components/home/CountDownComponent.vue'
import FormComponent from '@/components/home/FormComponent.vue'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import LocalIcon from '@/components/icons/LocalIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'

const { t } = useI18n()
</script>
<style></style>
