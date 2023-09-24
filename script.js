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
  mySlider('left')
})

btnRight.addEventListener('click', function () {
  mySlider('right')
})

// popUp

const popUpBtn = document.querySelector('.nav320')
const popUp = document.querySelector('.popUp')

popUpBtn.addEventListener('click', function () {
  if (this.style.transform === 'rotate(90deg)') {
    this.style.transform = 'rotate(0deg)'
    popUp.style.right = 0
    popUp.style.right = '-100%'
  } else {
    this.style.transform = 'rotate(90deg)'
    popUp.style.right = 0
  }
})

// modal

const modalBtns = document.querySelectorAll('.slider button')

const pets = {
  Katrine: {
    name: 'Katrine',
    kindOfAnimal: 'Cat',
    breed: 'Persian cat',
    description:
      'The Persian cat, also known as the Persian longhair, is a long-haired breed of cat characterized by a round face and short muzzle. The first documented ancestors of Persian cats might have been imported into Italy from Khorasan as early as around 1620, however this has not been proven. ',
    age: 2,
    inoculations: 'none',
    diseases: 'none',
    parasites: 'none',
  },
  Jennifer: {
    name: 'Jennifer',
    kindOfAnimal: 'Dog',
    breed: 'German Shepherd',
    description:
      'The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep.',
    age: 23,
    inoculations: 'none',
    diseases: 'none',
    parasites: 'none',
  },
  Woody: {
    name: 'Woody',
    kindOfAnimal: 'Dog',
    breed: 'Labrador Retriever',
    description:
      'The Labrador Retriever, or simply Labrador, is a British breed of retriever gun dog. It was developed in the United Kingdom from fishing dogs imported from the colony of Newfoundland, and was named after the Labrador region of that colony.',
    age: 53,
    inoculations: 'none',
    diseases: 'none',
    parasites: 'none',
  },
  Sophia: {
    name: 'Sophia',
    kindOfAnimal: 'Dog',
    breed: 'Bernese Mountain Dog',
    description:
      'The Bernese Mountain Dog is a large dog breed, one of the four breeds of Sennenhund-type dogs from Bern, Switzerland and the Swiss Alps. These dogs have roots in the Roman mastiffs. The name Sennenhund is derived from the German Senne and Hund, as they accompanied the alpine herders and dairymen called Senn.',
    age: 13,
    inoculations: 'none',
    diseases: 'none',
    parasites: 'none',
  },
  Timmy: {
    name: 'Timmy',
    kindOfAnimal: 'Cat',
    breed: 'American Shorthair',
    description:
      "The American Shorthair is a breed of domestic cat believed to be descended from European cats brought to North America by early settlers to protect valuable cargo from mice and rats. According to the Cat Fanciers' Association, in 2020, it was the eighth most popular pedigreed cat in the world. ",
    age: 5,
    inoculations: 'none',
    diseases: 'none',
    parasites: 'none',
  },
  Scarlett: {
    name: 'Scarlett',
    kindOfAnimal: 'Dog',
    breed: 'Afghan Hound',
    description:
      'The Afghan Hound is a hound distinguished by its thick, fine, silky coat, and a tail with a ring curl at the end. The breed is selectively bred for its unique features in the cold mountains of Afghanistan. Its local name is Tāžī Spay or Sag-e Tāzī.',
    age: 11,
    inoculations: 'none',
    diseases: 'none',
    parasites: 'none',
  },
}

modalBtns.forEach((el) =>
  el.addEventListener('click', function () {
    const pet = pets[this.parentNode.querySelector('p').innerText]
    const petPic = this.parentNode.querySelector('img').src
    let modal = `
<div class='modal'>
  <img src='${petPic}' alt='${pet.kindOfAnimal}'>
  <div class='disc'>
    <h3>${pet.name}</h3>
    <h4>${pet.kindOfAnimal} - ${pet.breed}</h4>
    <p>${pet.description}</p>
    <ul>
      <li><b>Age:</b> ${pet.age}</li>
      <li><b>Inoculations:</b> ${pet.inoculations}</li>
      <li><b>Diseases:</b> ${pet.diseases}</li>
      <li><b>Parasites:</b> ${pet.parasites}</li>
    </ul>
  </div>
  <button>X</button>
</div>
`
    const div = document.createElement('div')
    div.innerHTML = modal
    div.classList.add('modalWrapper')
    document.querySelector('.sliderWrapper').prepend(div)
    document
      .querySelector('.modal > button')
      .addEventListener('click', function () {
        document.querySelector('.sliderWrapper').removeChild(div)
      })
  }),
)
