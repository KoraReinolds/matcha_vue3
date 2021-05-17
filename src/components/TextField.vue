<template lang="pug">

label(
  :class="[$style.label, $style[type], { [$style.rounded]: type === 'outlined' && rounded }, { [$style.filled]: filled }]"
)
  BaseInput(
    v-bind="$attrs"
    :class="[$attrs.modelValue && $style.not_empty].join(' ')"
  )
  div(
    :class="[$style.placeholder]"
  ) {{ placeholder }}
  fieldset(
    :class="[$style.fieldset]"
  )
    legend(
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
    rounded: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'regular',
      validator: (v: string) => {
        return ['regular', 'outlined'].includes(v)
      }
    }
  },
  components: {
    BaseInput,
  },
})

</script>

<style module lang="scss">


$border-height: var(--input-border-thick);
$legend-font-size: 10px;

.regular {

  input, textarea {
    &.filled,
    &:focus {
      & ~ .fieldset:after {
        width: 100%;
      }
    }
  }

  .fieldset:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 0%;
    background-color: var(--block-color-2);
    transition: width 0.7s;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: var(--block-color-2);
  }

}

.label {
  position: relative;
  margin-bottom: 10px;
  display: block;
  border-radius: var(--input-border-radius);
  cursor: text;
}

.fieldset {
  border-radius: inherit;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  padding: 0;
  border: 1px solid var(--input-border-color);
  margin: 0;
  transition-duration: 0.5s;
  transition-property: border;
}

.legend {
  max-width: 0;
  height: 0;
  color: transparent;
  margin: 0 0 0 calc(var(--input-rounded-left-offset) + var(--input-padding));
  padding: 0;
  font-size: $legend-font-size;
  transition: max-width .5s ease;
}

textarea,
input {

  &.not_empty,
  &:focus {
    & ~ .placeholder {
      top: calc(0% - #{$legend-font-size} * var(--line-height) / 2 + var(--input-top-offset));
      font-size: $legend-font-size;
      left: calc(var(--input-rounded-left-offset) + var(--input-padding) + 5px);
    }
    & ~ .fieldset {
      border: $border-height solid var(--input-border-color-focus);
      & .legend {
        max-width: 50%;
      }
    }
  }

  &:hover:not(:focus) ~ .fieldset {
    border: $border-height solid var(--input-border-color-focus);
  }

}

.placeholder {
  position: absolute;
  top: calc(50% - var(--font-size) * var(--line-height) / 2 + var(--input-top-offset));
  left: calc(var(--input-rounded-left-offset) + var(--input-padding));
  color: var(--block-color-2);
  transition-duration: 0.5s;
  transition-property: top font-size;
}

</style>
