<template lang="pug">

//- transition(
//-   @before-enter="beforeEnter"
//-   @enter="enter"
//- )
//-   div
Header(
  @click="changeTheme"
)
  //- @click="$router.push('/auth')"
//- div(
//-   v-if="src"
//-   class="box"
//- )
//-   img(
//-     :src="src"
//-   )
router-view(
  @click="$router.push('/')"
)

</template>

<script lang="ts">

import { defineComponent } from "vue"
import html2canvas from "html2canvas"
import gsap from "gsap"

export default defineComponent({
  name: "App",
  data: () => ({
  }),
  methods: {
    beforeEnter() {
      console.log('beforeEnter')
    },
    enter() {
      console.log('enter')
    },
    async changeTheme(e: MouseEvent) {
      const { clientX: x, clientY: y  } = e

      const canvas = await html2canvas(document.body)
      const base64image = canvas.toDataURL("image/png")
      const { innerHeight: screenY, innerWidth: screenX } = window
      const size = Math.sqrt(screenX * screenX + screenY * screenY) * 2
      const duration = 0.9
      const app1_top = y - size / 2
      const app1_left = x - size / 2
      const ease = 'Power2.easeIn'

      gsap.fromTo(`#app1`, {
        width: '0%',
        height: '0%',
        borderRadius: '50%',
        top: `${y}px`,
        left: `${x}px`,
      }, {
        width: `${size}px`,
        height: `${size}px`,
        top: `${app1_top}px`,
        left: `${app1_left}px`,
        duration,
        ease,
      })

      gsap.fromTo(`#app`, {
        top: `-${y}px`,
        left: `-${x}px`,
      }, {
        top: `${app1_top > 0 ? -app1_top : Math.abs(app1_top)}px`,
        left: `${app1_left > 0 ? -app1_left : Math.abs(app1_left)}px`,
        duration,
        ease,
      })

      const body: HTMLElement = window.document.body
      body.style.backgroundImage = `url(${base64image})`
      body.style.backgroundSize = `100% 100%`
      const theme: string = body.className
      body.className = theme === 'dark' ? 'light' : 'dark'

    }
  }
})

</script>

<style lang="scss">

#app1 {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}

html, body, #app {
  min-height: 100vh;
}

body {
  margin: 0;
}

#app {
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
