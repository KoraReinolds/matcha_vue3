<template lang="pug">

div(

)
  BaseInput(
    msg="Welcome to Your Vue.js + TypeScript App"
  )

</template>

<script lang="ts">

import { defineComponent } from "vue"
import BaseInput from "@/components/BaseInput.vue"

export default defineComponent({
  name: "Home",
  components: {
    BaseInput,
  },
})

</script>
