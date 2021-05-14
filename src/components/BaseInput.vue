<script lang="ts">

import { h, defineComponent } from "vue"

export default defineComponent({
  name: "BaseInput",
  props: {
    class: {
      type: String,
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
        class: [this.class, 'input'].join(' '),
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
  $border-height: var(--input-border-radius);

  textarea {
    margin-bottom: -4px;
  }

  .input {

    font-family: 'Roboto', sans-serif;
    width: 100%;
    border: $border-height solid transparent;
    background-color: var(--block-color-0);
    line-height: var(--line-height);
    font-size: $font-size;
    padding: var(--input-padding);
    border-radius: 4px;
    color: var(--font-color);
    box-sizing: border-box;
    resize: none;
    transition-duration: 0.5s;
    transition-property: border;

    &:focus {
      outline: none;
      border: $border-height solid var(--block-color-2);
    }

    &:hover:not(:focus) {
      border: $border-height solid var(--block-color-1);
    }

  }

  .form_input.input {
    margin-bottom: 10px;
  }
  
</style>
