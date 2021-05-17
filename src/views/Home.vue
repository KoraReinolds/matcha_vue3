<template lang="pug">

div(
)
  TextField(
    :many="true"
    v-model="value"
    placeholder="123dskfldfahfodshoidsf sjafhsdoi;hfds"
    type="outlined"
    filled
  )
  TextField(
    v-model="value"
    placeholder="123dskfldfahfodshoidsf sjafhsdoi;hfds"
    type="outlined"
    rounded
  )
  TextField(
    v-model="value"
    placeholder="123dskfldfahfodshoidsf sjafhsdoi;hfds"
    type="outlined"
    rounded
    filled
  )
  TextField(
    :many="true"
    v-model="value"
    placeholder="123dskfldfahfodshoidsf sjafhsdoi;hfds"
    filled
  )
  TextField(
    :many="true"
    placeholder="123dskfldfahfodshoidsf sjafhsdoi;hfds"
    v-model="value"
    rounded
  )
  TextField(
    v-model="value"
    placeholder="123dskfldfahfodshoidsf sjafhsdoi;hfds"
    rounded
    filled
  )
  div {{ value }}

</template>

<script module lang="ts">

import { defineComponent } from "vue"
import TextField from "@/components/TextField.vue"

export default defineComponent({
  name: "Home",
  data: () => ({
    value: '',
  }),
  components: {
    TextField,
  },
})

</script>

<style module lang="scss">

</style>
