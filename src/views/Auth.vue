<template lang="pug">

div(

)
  BaseInput(
    @click="$router.push('/')"
    msg="blue"
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
