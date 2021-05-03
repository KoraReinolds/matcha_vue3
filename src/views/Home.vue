<template lang="pug">

div(
)
  div 1234
  BaseInput(
    @click="$router.push('/auth')"
    msg="red"
  )
  div 1234
  BaseInput(
    @click="$router.push('/auth')"
    msg="green"
  )
  div 1234
  BaseInput(
    @click="$router.push('/auth')"
    msg="yellow"
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
