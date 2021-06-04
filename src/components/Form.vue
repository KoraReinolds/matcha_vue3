<template lang="pug">

component(
  v-for="field in schema"
  v-bind="field"
  :is="field.component"
  v-model="values[field.key]"
)
  //- :modelValue="values[field.key]"
  //- @update:modelValue="changeValue"

</template>

<script lang="ts">

import { defineComponent, PropType, ref } from "vue"
import { PossibleFields, RegistrationForm, LoginForm } from "@/types/form"
import TextField from "@/components/TextField.vue"

export default defineComponent({
  name: "Form",
  props: {
    schema: {
      type: Object as PropType<RegistrationForm | LoginForm>,
      required: true,
    },
  },
  components: {
    TextField,
  },
  setup() {

    const registrationValues = ref<{ [key in PossibleFields]: string }>({
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
    })

    return { values: registrationValues }

  }
})

</script>

<style module lang="scss">

</style>
