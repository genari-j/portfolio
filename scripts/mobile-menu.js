const mobileMenu = document.querySelector('.mobile-menu-btn')
const mobileMenuList = document.querySelector('.mobile-menu-nav')

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
  mobileMenuList.classList.toggle('open')
})

const navLinks = mobileMenuList.querySelectorAll('a')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
    mobileMenuList.classList.remove('open')
  })
})