document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const missingFormValuesContainer = document.querySelector('.missing-form-values-container')
  const missingFormMessage = document.querySelector('.missing-form-message')

  if (!email || !message) {
    missingFormMessage.innerText = 'Por gentiliza, preencha o formulário.'
    missingFormValuesContainer.classList.add('open-missing-form-message')

    const closeMissingFormMessage = () => {
      missingFormValuesContainer.classList.remove('open-missing-form-message')
    }

    setTimeout(closeMissingFormMessage, 2500)

    return
  }

  let body = `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`

  const mailtoLink =
    "mailto:victor.olr@hotmail.com" +
    "?subject=Contato%20-%20Via%20Portfólio" +
    "&body=" +
    encodeURIComponent(body)

  window.location.href = mailtoLink
})