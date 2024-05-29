<template>
  <div id="send-mail-form" class="flex justify-center">
    <div class="width-90 flex justify-center gap-14 py-[100px] max-lg:flex-col">
      <div class="flex flex-col w-1/2 max-lg:w-full max-lg:pr-0 gap-4 pr-10">
        <h1 class="text-5xl font-semibold">{{ t('sendMail.headerSendMail') }}</h1>
        <p class="text-lg font-medium">
          {{ t('sendMail.describeSendMail') }}
        </p>
      </div>
      <div class="flex w-1/2 max-lg:w-full">
        <div class="flex flex-col gap-2 w-full">
          <h4 class="text-xl font-semibold">{{ t('sendMail.fullNameSendMail') }}</h4>
          <form @submit.prevent="handleSendEmail" class="flex flex-col gap-2 w-full">
            <input
              v-model="inputValue"
              @change="validateForm"
              type="text"
              :placeholder="t('sendMail.yourNameSendMail')"
              class="py-3 px-5 text-xl border-solid border-2 border-black rounded-lg font-medium"
            />
            <div class="mt-2">
              <Button
                type="submit"
                :disabled="isSending || inputValue.trim() === ''"
                :loading="isSending"
                :label="t('acceptToJoinBtn')"
                class="bg-button-color border-none rounded-xl py-3.5 px-8 hover:bg-button-hover-color"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    class="w-1/2 max-lg:w-4/5"
    :pt="{
      root: 'border-none',
      mask: {
        style: 'backdrop-filter: blur(2px)'
      }
    }"
  >
    <template #container="{ closeCallback }">
      <div class="bg-[#3A3632]">
        <div class="p-6 flex flex-col items-center gap-5">
          <div class="flex justify-end w-full">
            <CloseIcon @click="closeCallback" class="cursor-pointer"></CloseIcon>
          </div>
          <h1 class="text-5xl text-[#F4811F] font-semibold">
            {{ t('popupSendMail.headerPopupSendMail') }}
          </h1>
          <p class="text-lg text-white-color">
            {{ t('popupSendMail.describePopupSendMail') }}
          </p>
        </div>
      </div>
    </template>
  </Dialog>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import emailjs from 'emailjs-com'

const { t } = useI18n()

const inputValue = ref('')

const visible = ref(false)
const isSending = ref(false)

const validateForm = () => {
  console.log(inputValue.value.trim())
}

const handleSendEmail = () => {
  const serviceID = 'service_wm0m7g3'
  const templateID = 'template_x62uz27'
  const userID = 'jPBt5lhlj02UgagF1'

  const templateParams = {
    name: inputValue.value
  }

  isSending.value = true
  emailjs.send(serviceID, templateID, templateParams, userID).then(
    () => {
      visible.value = true
      isSending.value = false
    },
    (error) => {
      console.error('FAILED send mail...', error)
    }
  )
}
</script>
<style></style>
