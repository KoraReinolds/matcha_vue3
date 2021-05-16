<template lang="pug">

div(
)
  TextField(
    :many="true"
    v-model="value"
    placeholder="123"
  )
  TextField(
    v-model="value"
    placeholder="123dskfldfahfodshoidsf sjafhsdoi;hfds"
  )
  TextField(
    :many="true"
    v-model="value"
  )
  div {{ value }}

</template>

<script lang="ts">

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
