<template lang="pug">

div(
)
  TextField(
    :many="true"
  )
  TextField(
  )
  TextField(
    :many="true"
  )

</template>

<script lang="ts">

import { defineComponent } from "vue"
import TextField from "@/components/TextField.vue"

export default defineComponent({
  name: "Home",
  components: {
    TextField,
  },
})

</script>
