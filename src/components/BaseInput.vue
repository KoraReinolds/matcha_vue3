<template lang="pug">

div(
  :class="$style.input"
  @click="changeTheme"
  :style="{ background: msg }"
) {{ msg }}

</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
  name: "BaseInput",
  props: {
    msg: String,
  },
  methods: {
    changeTheme() {
      console.log('changeTheme')
    }
  }
})

</script>

<style module lang="scss">

.input {
  color: var(--font-color);
  height: 300px;
  width: 500px;
}

</style>
