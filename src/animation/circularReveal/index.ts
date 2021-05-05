import html2canvas from "html2canvas"
import gsap from "gsap"
import Coords from "@/types/coords"

type props = {
  coords: Coords,
  dist?: number
}

export default async ({ coords: { x, y }, dist }: props) => {

  if (!x && !y) return
  
  const canvas = await html2canvas(document.body)
  const base64image = canvas.toDataURL("image/png")
  const { innerHeight: screenY, innerWidth: screenX } = window
  const size = dist || Math.sqrt(screenX * screenX + screenY * screenY) * 2
  const duration = 0.6
  const app1_top = y - size / 2
  const app1_left = x - size / 2
  const ease = 'Power2.easeIn'
  const body: HTMLElement = window.document.body
  body.style.backgroundImage = `url(${base64image})`
  body.style.backgroundSize = `100% 100%`

  gsap.fromTo(`#app1`, {
    width: '0%',
    height: '0%',
    borderRadius: '50%',
    top: `${y}px`,
    left: `${x}px`,
  }, {
    width: `${size}px`,
    height: `${size}px`,
    top: `${app1_top}px`,
    left: `${app1_left}px`,
    duration,
    ease,
    onComplete: function() {
      this._targets[0].removeAttribute("style")
    }
  })
  
  gsap.fromTo(`#app`, {
    top: `-${y}px`,
    left: `-${x}px`,
  }, {
    top: `${app1_top > 0 ? -app1_top : Math.abs(app1_top)}px`,
    left: `${app1_left > 0 ? -app1_left : Math.abs(app1_left)}px`,
    duration,
    ease,
    onComplete: function() {
      this._targets[0].removeAttribute("style")
      body.removeAttribute("style")
    }
  })

}
