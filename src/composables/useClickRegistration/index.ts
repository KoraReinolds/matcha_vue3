import { onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

export default function useClickRegistration() {

  const store = useStore()

  const regClick = ({ clientX, x, clientY, y }: MouseEvent) => store.commit('SET_LAST_CLICK_COORDS', { x, y })
  
  onUnmounted(() => window.removeEventListener("mousedown", regClick))
  
  onMounted(() => window.addEventListener("mousedown", regClick))
  
}