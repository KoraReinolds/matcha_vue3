<template lang="pug">

div(
  :class="[$style.input, { [$style.show]: show }]"
  :style="{ background: msg }"
  @click="toggleState"
) {{ msg }}

</template>

<script lang="ts">

import { defineComponent } from "vue"
import circularReveal from "@/animation/circularReveal"
import store from "@/store"

export default defineComponent({
  name: "BaseInput",
  props: {
    msg: String,
  },
  data: () => ({
    show: false,
  }),
  methods: {
    async toggleState() {

      await circularReveal({ coords: store.state.coords, dist: 600 })

      this.show = !this.show

    }
  }
})

</script>

<style module lang="scss">

.input {
  color: var(--font-color);
  height: 50px;
  width: 50px;
}

.input.show {
  height: 50px;
  width: 300px;
}

</style>
