import { shallowMount } from "@vue/test-utils"
import TextField from "@/components/TextField.vue"
import { config } from '@vue/test-utils'

config.global.mocks = config.global.mocks || {}
config.global.mocks.$style = {}

describe("TextField.vue", () => {

  it("legend not render without placeholder", () => {

    const wrapper = shallowMount(TextField)
    const legend = wrapper.find('legend')

    expect(legend.exists()).toBe(false)
    
  })

  it("legend render with placeholder", () => {

    const wrapper = shallowMount(TextField, {
      props: { placeholder: '123' }
    })
    const legend = wrapper.find('legend')

    expect(legend.exists()).toBe(true)
    
  })
  
})
