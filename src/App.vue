<template lang="pug">

Header(
  @click="changeTheme"
)
router-view

</template>

<script lang="ts">

import { defineComponent } from "vue"
import useClickRegistration from "@/composables/useClickRegistration"
import circularReveal from "@/animation/circularReveal"

export default defineComponent({
  name: "App",
  methods: {
    async changeTheme({ clientX, x, clientY, y }: MouseEvent) {

      await circularReveal({ coords: { x, y } })

      const body: HTMLElement = window.document.body
      const theme: string = body.className
      body.className = theme === 'dark' ? 'light' : 'dark'

    },
  },
  setup() {
    useClickRegistration()
  }
})

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  #app1 {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
  }

  html, body, #app {
    min-height: 100vh;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: var(--background-color);
  }

  Header {
    background: var(--block-color-1);
    height: 200px;
    width: 100%;
  }

</style>
