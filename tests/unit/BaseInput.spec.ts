import { shallowMount } from "@vue/test-utils"
import BaseInput from "@/components/BaseInput.vue"

describe("BaseInput.vue", () => {

  it("by default render empty <input />", () => {

    const wrapper = shallowMount(BaseInput)
    const input = wrapper.find(`[data-test='input']`)

    expect(input.exists()).toBe(true)
    expect((input.element as HTMLInputElement).value).toEqual('')
    expect(input.attributes('rows')).toBe(undefined)
    
  })
  
  it("render empty <textarea /> with props 'many'", () => {
    
    const wrapper = shallowMount(BaseInput, {
      props: { many: true }
    })
    const input = wrapper.find(`[data-test='textarea']`)
    
    expect(input.exists()).toBe(true)
    expect((input.element as HTMLInputElement).value).toEqual('')
    expect(input.attributes('rows')).toBe('1')

  })

  it("emitting events on <input />", async () => {

    const wrapper = shallowMount(BaseInput)

    const input = wrapper.find(`[data-test='input']`)
    input.setValue('123\n')

    const emmited = wrapper.emitted()['update:modelValue']

    expect(emmited.length).toEqual(1)
    expect(emmited[0]).toEqual(["123"])
    expect((input.element as HTMLInputElement).value).toEqual('123')

  })

  it("emitting events on <textarea />", async () => {

    const wrapper = shallowMount(BaseInput, {
      props: { many: true }
    })

    const input = wrapper.find(`[data-test='textarea']`)
    input.setValue('123\n')

    const emmited = wrapper.emitted()['update:modelValue']

    expect(emmited.length).toEqual(1)
    expect(emmited[0]).toEqual(["123\n"])
    expect((input.element as HTMLInputElement).value).toEqual('123\n')

  })

  it("getting modelValue on <input />", async () => {

    const wrapper = shallowMount(BaseInput, {
      props: { modelValue: '123\n' }
    })

    const input = wrapper.find(`[data-test='input']`)

    expect((input.element as HTMLInputElement).value).toEqual('123')

  })

  it("getting modelValue on <textarea />", async () => {

    const wrapper = shallowMount(BaseInput, {
      props: { many: true, modelValue: '123\n' }
    })

    const input = wrapper.find(`[data-test='textarea']`)

    expect((input.element as HTMLInputElement).value).toEqual('123\n')
    expect(input.attributes('rows')).toBe('2')

  })

})
