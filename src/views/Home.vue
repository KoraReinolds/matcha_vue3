<template lang="pug">

Form(
  :schema="registrationForm"
)

</template>

<script module lang="ts">

import { defineComponent, ref } from "vue"
import TextField from "@/components/TextField.vue"
import Form from "@/components/Form.vue"

export default defineComponent({
  name: "Home",
  components: {
    TextField,
    Form,
  },
  setup() {
    
    const registrationForm = [
      {
        key: "firstName",
        component: "TextField",
        label: "First Name",
        placeholder: "Введите имя",
        validations: {
          required: {
            params: null,
            message: "This field is required"
          },
          minLength: {
            params: 3,
            message: "Please type at least 3 characters"
          }
        }
      },
      {
        key: "lastName",
        component: "TextField",
        label: "Last Name",
        placeholder: "Введите фамилию",
        validations: {
          required: {
            params: null,
            message: "This field is required"
          }
        }
      },
      {
        key: "email",
        component: "TextField",
        label: "Email",
        placeholder: "Введите адрес электронной почты",
        type: "email",
        validations: {
          required: {
            params: null,
            message: "This field is required"
          },
          email: {
            params: null,
            message: "This field needs to be a valid email"
          }
        }
      }
    ]

    return { registrationForm }

  },
})

</script>

<style module lang="scss">

</style>
