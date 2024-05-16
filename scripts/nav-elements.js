const scrollSpy = (menuElement) => {
  const sections = document.querySelectorAll('section')
  const navLinks = menuElement.querySelectorAll('ul li a')

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 150
    const sectionBottom = sectionTop + section.clientHeight
    const scrollY = window.scrollY

    if (index < navLinks.length) {
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks[index].classList.add('active')
      } else {
        navLinks[index].classList.remove('active')
      }
    }
  })
}

const setActiveNavFirstElement = (menuElement) => {
  const navLinks = menuElement.querySelectorAll('ul li a')
  if (navLinks.length > 0) {
    navLinks[0].classList.add('active')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const desktopMenuNav = document.querySelector('nav')
  const mobileMenuNav = document.querySelector('.mobile-menu-nav')

  scrollSpy(desktopMenuNav)
  scrollSpy(mobileMenuNav)
  
  setActiveNavFirstElement(desktopMenuNav)
  setActiveNavFirstElement(mobileMenuNav)
})

window.addEventListener('scroll', () => {
  const desktopMenuNav = document.querySelector('nav')
  const mobileMenuNav = document.querySelector('.mobile-menu-nav')

  scrollSpy(desktopMenuNav)
  scrollSpy(mobileMenuNav)
})

