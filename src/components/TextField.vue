<template lang="pug">

BaseInput(
  :class="['form_input']"
  v-bind="$attrs"
  v-model="value"
)
</template>

<script lang="ts">

import { defineComponent } from "vue"
import BaseInput from "@/components/BaseInput.vue"

export default defineComponent({
  name: "TextField",
  data: () => ({
    value: '',
  }),
  components: {
    BaseInput,
  },
})

</script>

<style module lang="scss">

</style>
