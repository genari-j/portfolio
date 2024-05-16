let imgs = document.querySelectorAll('.slider img')
let dots = document.querySelectorAll('.dot')
let currentImg = 0

function changeSlide(n) {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0
    dots[i].className = dots[i].className.replace(' active-slide', '')
  }

  currentImg = n

  imgs[currentImg].style.opacity = 1
  dots[currentImg].className += ' active-slide'
}

let timer = setInterval(function() {
  changeSlide((currentImg + 1) % imgs.length)
}, 2000)