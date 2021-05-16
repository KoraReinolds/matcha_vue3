<template lang="pug">

label(
  :class="[$style.label]"
  data-test='label'
)
  BaseInput(
    v-bind="$attrs"
    :class="[$attrs.modelValue && $style.filled].join(' ')"
  )
  div(
    :class="[$style.placeholder]"
    data-test='placeholder'
  ) {{ placeholder }}
  fieldset(
    :class="[$style.fieldset]"
    data-test='fieldset'
  )
    legend(
      data-test='legend'
      v-if="placeholder"
      :class="[$style.legend]"
    ) ..{{ placeholder }}..

</template>

<script lang="ts">

import { defineComponent } from "vue"
import BaseInput from "@/components/BaseInput.vue"

export default defineComponent({
  inheritAttrs: false,
  name: "TextField",
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  components: {
    BaseInput,
  },
})

</script>

<style module lang="scss">

$border-height: var(--input-border-radius);
$legend-font-size: 10px;

.label {
  position: relative;
  margin-bottom: 10px;
  display: block;
  border-radius: 4px;
}

.fieldset {
  border-radius: inherit;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  padding: 0;
  border: 1px solid transparent;
  margin: 0;
  transition-duration: 0.5s;
  transition-property: border;
}

.legend {
  max-width: 0;
  height: 0;
  color: transparent;
  margin: 0 0 0 var(--input-padding);
  padding: 0;
  font-size: $legend-font-size;
  transition: max-width .5s ease;
}

textarea,
input {

  &.filled,
  &:focus {
    & ~ .placeholder {
      top: calc(0% - #{$legend-font-size} * var(--line-height) / 2);
      font-size: $legend-font-size;
      left: calc(var(--input-padding) + 5px);
    }
    & ~ .fieldset {
      border: $border-height solid var(--block-color-2);
      & .legend {
        max-width: 50%;
      }
    }
  }

  &:hover:not(:focus) ~ .fieldset {
    border: $border-height solid var(--block-color-1);
  }

}

.placeholder {
  position: absolute;
  top: calc(50% - var(--font-size) * var(--line-height) / 2);
  left: var(--input-padding);
  color: var(--block-color-2);
  transition-duration: 0.5s;
  transition-property: top font-size;
}

</style>
