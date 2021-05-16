<script lang="ts">

import { h, defineComponent } from "vue"

export default defineComponent({
  name: "BaseInput",
  props: {
    class: {
      type: String,
      default: '',
    },
    many: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  render() {

    const tag = this.many ? 'textarea' : 'input'

    return h(
      tag,
      {
        class: this.class,
        ['data-test']: tag,
        value: this.modelValue,
        onInput: ($e: InputEvent) => {
          // const value = ($e.shiftKey && $e.code === 'Enter') ? ($e.target as HTMLInputElement).value : ''
          // if (this.input) this.input.value = value
          this.$emit('update:modelValue', ($e.target as HTMLInputElement).value)
        },
        ...(
          tag === 'textarea' && {
            // count of linebreaks
            rows: `${[...this.modelValue].filter(l => l === `\n`).length + 1}`
          }
        )
      },
      this.$slots.default?.()
    )

  },
})

</script>

<style lang="scss">

  $font-size: var(--font-size);

  textarea,
  input {
    width: 100%;
    height: 100%;
    font-size: $font-size;
    font-family: 'Roboto', sans-serif;
    background-color: var(--block-color-0);
    padding: var(--input-padding);
    resize: none;
    border: none;
    color: var(--font-color);
    line-height: var(--line-height);
    border-radius: inherit;

    &:focus {
      outline: none;
    }

  }

  textarea {
    margin-bottom: -4px;
  }

</style>
