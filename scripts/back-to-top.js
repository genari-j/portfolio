const backToTopBtn = document.querySelector('#backToTopBtn')
const currentPageScroll = document.body.scrollTop

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY
  scrollPosition >= 450 ? backToTopBtn.classList.add('open') : backToTopBtn.classList.remove('open')
})

backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})