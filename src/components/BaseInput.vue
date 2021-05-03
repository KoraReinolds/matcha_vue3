<template lang="pug">

div(
  :class="$style.input"
) 123

</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
  name: "BaseInput",
  props: {
    msg: String,
  },
})

</script>

<style module lang="scss">

.input {
  color: var(--font-color);
}

</style>
