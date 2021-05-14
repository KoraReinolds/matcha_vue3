// import { ref, onMounted, watch } from 'vue'

// export default function useTextFieldHeightHandler({
//   modelValue, inputElement,
// }: {
//   modelValue: string,
//   inputElement: HTMLElement | null,
// }) {

//   // const inputElement = ref<HTMLElement | null>(null)
//   console.log('elem')
//   const setHeight = (elem: HTMLElement | null) => {
//     if (elem) {
//       elem.style.cssText = 'height:0px'
//       elem.style.cssText = `height:${ elem.scrollHeight }px`
//     }
//   }

//   watch(
//     () => modelValue,
//     () => {
//       console.log('123', inputElement)
//       setHeight(inputElement)
//     }
//     )
    
//   onMounted(() => {
//     console.log('!!!123', inputElement)
//     setHeight(inputElement)
//   })

// }