// slider

const slider = document.querySelectorAll('.slider div')
const btnLeft = document.querySelector('.btn_left')
const btnRight = document.querySelector('.btn_right')

function slide() {
  slider.forEach((el, ind) => {
    el.style.order = ind + 1
  })
  return (direction) => {
    if (direction === 'left') {
      slider.forEach((el) => {
          el.style.order -= -1
        if (el.style.order > slider.length) {
          el.style.order = 1
        }
        if (el.style.order == 0) {
          el.style.order = slider.length
        }
      })
    }
    if (direction === 'right') {
      slider.forEach((el) => {
        el.style.order -= 1
        if (el.style.order == 0) {
          el.style.order = slider.length
        }
      })
    }
  }
}

const mySlider = slide()

btnLeft.addEventListener('click', function () {
  console.log('left')
  mySlider('left')
})

btnRight.addEventListener('click', function () {
  console.log('right')
  mySlider('right')
})
