<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import UiButton from './ui/UiButton.vue'

const validationSchema = yup.object({
  name: yup.string().required('Nimi on pakollinen'),
  phone: yup
    .string()
    .matches(/^\+?\d{7,15}$/, 'Anna voimassa oleva puhelinnumero')
    .required('Puhelin on pakollinen'),
  email: yup.string().email('Anna voimassa oleva sähköposti').required('Sähköposti on pakollinen'),
  message: yup.string().required('Kirjoita viesti'),
  privacy: yup.boolean().oneOf([true], 'Hyväksy tietosuojakäytäntö'),
})

const { handleSubmit, resetForm } = useForm({
  validationSchema,
})

const nameField = useField<string>('name')
const phoneField = useField<string>('phone')
const emailField = useField<string>('email')
const messageField = useField<string>('message')
const privacyField = useField<boolean>('privacy')

const name = nameField.value
const phone = phoneField.value
const email = emailField.value
const message = messageField
const privacy = privacyField.value

const messageValue = computed({
  get: () => message.value.value,
  set: (val) => (message.value.value = val),
})

/* const GOOGLE_FORM_ACTION = import.meta.env.VITE_GOOGLE_FORM_ACTION

const GOOGLE_FIELDS = {
  name: import.meta.env.VITE_GOOGLE_FIELD_NAME,
  phone: import.meta.env.VITE_GOOGLE_FIELD_PHONE,
  email: import.meta.env.VITE_GOOGLE_FIELD_EMAIL,
  message: import.meta.env.VITE_GOOGLE_FIELD_MESSAGE,
} */

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

/* const submitForm = handleSubmit(async (values) => {
  isSubmitting.value = true

  const formPayload = new FormData()
  formPayload.append(GOOGLE_FIELDS.name, values.name)
  formPayload.append(GOOGLE_FIELDS.phone, values.phone)
  formPayload.append(GOOGLE_FIELDS.email, values.email)
  formPayload.append(GOOGLE_FIELDS.message, values.message)

  try {
    await fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      body: formPayload,
      mode: 'no-cors',
    })

    successMessage.value = 'Viesti on lähetetty onnistuneesti!'
    resetForm()
  } catch (error) {
    console.error('Lomakkeen lähetysvirhe:', error)
    errorMessage.value = 'Lähetys epäonnistui.'
  } finally {
    isSubmitting.value = false
  }
}) */

const submitForm = handleSubmit(async (values) => {
  isSubmitting.value = true

  const recaptchaResponse = (window as any).grecaptcha.getResponse()
  if (!recaptchaResponse) {
    errorMessage.value = 'Vahvista reCAPTCHA'
    isSubmitting.value = false
    return
  }

  const templateParams = {
    name: values.name,
    phone: values.phone,
    email: values.email,
    message: values.message,
    'g-recaptcha-response': recaptchaResponse,
  }

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    successMessage.value = 'Viesti on lähetetty onnistuneesti!'
    ;(window as any).grecaptcha.reset()
    resetForm()
  } catch (error) {
    console.error('Lomakkeen lähetysvirhe:', error)
    errorMessage.value = 'Lähetys epäonnistui.'
  } finally {
    isSubmitting.value = false
  }
})
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4 !mt-6" data-aos="fade-up">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 !mb-8">
      <div>
        <label for="name" class="block text-sm text-gray-500">Nimi *</label>
        <input
          v-model="name"
          id="name"
          placeholder=""
          class="w-full p-3 pt-1.5 border-0 border-b-2 border-gray-500 focus:outline-0 focus:border-b-4 focus-within:outline-0"
          required
        />
        <p v-if="nameField.errorMessage" class="error-message text-red-500 text-sm">
          {{ nameField.errorMessage }}
        </p>
      </div>
      <div>
        <label for="phone" class="block text-sm text-gray-500">Puhelin *</label>
        <input
          v-model="phone"
          type="tel"
          id="phone"
          placeholder=""
          class="w-full p-3 pt-1.5 border-0 border-b-2 border-gray-500 focus:outline-0 focus:border-b-4 focus-within:outline-0"
          required
        />
        <p v-if="phoneField.errorMessage" class="error-message text-red-500 text-sm">
          {{ phoneField.errorMessage }}
        </p>
      </div>
    </div>

    <div class="!mb-8">
      <label for="email" class="block text-sm text-gray-500">Sähköposti *</label>
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder=""
        class="w-full p-3 pt-1.5 border-0 border-b-2 border-gray-500 focus:outline-0 focus:border-b-4 focus-within:outline-0"
        required
      />
      <p v-if="emailField.errorMessage" class="error-message text-red-500 text-sm">
        {{ emailField.errorMessage }}
      </p>
    </div>

    <div class="!mb-8">
      <label for="message" class="block text-sm text-gray-500">Kirjoita viesti tähän...</label>
      <textarea
        v-model="messageValue"
        id="message"
        placeholder=""
        class="w-full p-3 pt-1.5 border-0 border-b-2 border-gray-500 focus:outline-0 focus:border-b-4 focus-within:outline-0"
        rows="3"
      ></textarea>
      <p v-if="message.errorMessage" class="error-message text-red-500">
        {{ message.errorMessage }}
      </p>
    </div>

    <div class="flex items-center !mb-8">
      <input
        v-model="privacy"
        type="checkbox"
        id="privacy"
        class="!mr-2 w-4 h-4 border-2 border-gray-500 rounded appearance-none checked:bg-primary checked:border-primary checked:ring-2 checked:ring-primary/20 focus:outline-none focus-within:outline-0"
        required
      />

      <label for="privacy" class="text-sm text-gray-500">Olen lukenut tietosuojakäytännöstä</label>
    </div>
    <div>
      <p v-if="privacyField.errorMessage" class="error-message text-red-500 text-sm">
        {{ privacyField.errorMessage }}
      </p>
    </div>

    <p v-if="successMessage" class="text-secondary !text-lg !font-bold">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message text-red-500 !text-lg !font-bold">
      {{ errorMessage }}
    </p>

    <div>
      <div class="g-recaptcha !mb-4" :data-sitekey="RECAPTCHA_SITE_KEY"></div>
      <UiButton type="submit" variant="primary">
        <span class="flex flex-row justify-center items-center gap-4" v-if="isSubmitting"
          ><img src="../assets/images/icons/loading.svg" /> Lähetä
        </span>
        <span v-else>Lähetä</span>
      </UiButton>
    </div>
  </form>
</template>

<style scoped>
input,
textarea {
  border-bottom: solid 2px #6b7282;
}
input:focus,
textarea:focus {
  border-bottom-width: 4px;
}
#privacy {
  border: solid 2px #6b7282;
}
.error-message {
  color: #fb2c36;
}
</style>
