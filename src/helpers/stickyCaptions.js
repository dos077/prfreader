import { throttle } from 'lodash'

const stickyCaptionsController = () => {
  const imgs = []

  const addEl = (img, caption) => {
    imgs.push({
      img,
      caption
    })
  }

  const handler = () => {
    imgs.forEach(({ img, caption }) => {
      const imgBox = img.getBoundingClientRect()
      const capBox = caption.getBoundingClientRect()
      const heightDelta = imgBox.height - capBox.height
      if (capBox.y < heightDelta) {
        img.style.top = `${capBox.bottom - capBox.top}px`
      } else if (capBox.y <= imgBox.height) {
        img.style.top = `${imgBox.height - capBox.y}px`
      } else {
        img.style.top = ''
      }
    })
  }

  const throttleHandler = throttle(handler, 33)

  const set = ({ img, caption }) => {
    if (img && caption) {
      addEl(img, caption)
    }
  }

  const start = () => {
    handler()
    window.addEventListener('scroll', throttleHandler)
  }

  const stop = () => {
    window.removeEventListener('scroll', throttleHandler)
  }

  return {
    set,
    start,
    stop
  }
}

export default stickyCaptionsController