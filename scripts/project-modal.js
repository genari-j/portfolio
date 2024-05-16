const handleOpenModal = () => document.getElementById('projects-modal').style.display = 'flex'
const handleCloseModal = () => document.getElementById('projects-modal').style.display = 'none'

const fillModalContent = (content) => document.querySelector('.modal-content').innerHTML = content

const addClickEventsToElements = (className, callback) => {
  const elements = document.getElementsByClassName(className)
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', callback)
  }
}

const projects = [
  {
    id: 1,
    image: [
      { id: 1, img: '../assets/images/projects/deliveryStoreTwo.jpg' },
      { id: 2, img: '../assets/images/projects/deliveryStoreOne.jpg' }
    ],
    name: 'Delivery App',
    description: 'Este projeto abrange o desenvolvimento completo de uma aplicação de delivery, com ênfase no Front-end construído em React.js e um Back-end operando em Node.js, ambos continuamente atualizados durante o processo de desenvolvimento. No Front-end, diversas funcionalidades e interações já estão operacionais, integradas através de uma API Rest com um conjunto de regras estabelecidas. Embora o foco principal seja o desenvolvimento Front-end, também assumo responsabilidades na implementação de funcionalidades no Back-end.',
    user: [
      { id: 1, functionality: 'Explore a aplicação através das rotas disponíveis;' },
      { id: 2, functionality: 'Crie uma conta para acesso personalizado;' },
      { id: 3, functionality: 'Faça login para desfrutar de funcionalidades exclusivas;' },
      { id: 4, functionality: 'Visualize produtos detalhadamente com apenas um clique;' },
      { id: 5, functionality: 'Navegue por categorias para encontrar itens específicos;' },
      { id: 6, functionality: 'Acesse informações relevantes sobre a loja;' },
      { id: 7, functionality: 'Encontre uma lista de contatos para suporte rápido e eficiente.' }
    ],
    admin: [
      { id: 1, functionality: 'Tenha acesso privilegiado a todas as áreas da aplicação;' },
      { id: 2, functionality: 'Adicione novos produtos ao catálogo;' },
      { id: 3, functionality: 'Atualize informações sobre produtos existentes;' },
      { id: 4, functionality: 'Remova qualquer item da aplicação com facilidade.' }
    ],
    repository: 'https://github.com/victorgenari/delivery-frontend-store'
  },
  {
    id: 2,
    image: [
      { id: 1, img: '../assets/images/projects/smile-sphere.bmp' }
    ],
    name: 'Smile Sphere',
    description: 'Este projeto simula um sistema de cadastro de pacientes, oferecendo uma plataforma intuitiva e eficiente para gerenciar informações de saúde. Para utilizar a aplicação, é necessário realizar um rápido cadastro e efetuar o login. Uma vez logado, o usuário obtém acesso completo às funcionalidades da aplicação. É possível cadastrar novos pacientes, os quais serão listados ordenadamente na tela principal. Além disso, a aplicação permite a edição e remoção dos registros de pacientes, proporcionando flexibilidade e controle sobre os dados.',
    repository: 'https://github.com/victorgenari/smile-sphere'
  },
  {
    id: 3,
    image: [
      { id: 1, img: '../assets/images/projects/cardInRealTime.jpg' }
    ],
    name: 'Card In Real Time',
    description: 'Este projeto foi concebido como uma simulação para demonstrar uma proposta de design para cartões bancários. À medida que os dados são inseridos no formulário, eles são exibidos em tempo real no layout do cartão, proporcionando uma visualização imediata e interativa. Além disso, a aplicação permite a inclusão de dados pessoais adicionais, fornecendo informações completas para futuras considerações sobre a proposta apresentada. Este projeto visa oferecer uma experiência intuitiva e informativa na personalização de cartões bancários.',
    repository: 'https://github.com/victorgenari/card-in-real-time'
  }
]

addClickEventsToElements('project-detail', function(event) {
  const projectId = event.currentTarget.dataset.projectId

  const project = projects.find(project => project.id === parseInt(projectId))

  let userFunctionalities = ''
  if (project.user) {
    userFunctionalities = '<h3>Usuário:</h3>'
    project.user.forEach(functionality => {
      userFunctionalities += `<p>◈ ${functionality.functionality}</p>`
    })
  }

  let adminFunctionalities = ''
  if (project.admin) {
    adminFunctionalities = '<h3>Admin:</h3>'
    project.admin.forEach(functionality => {
      adminFunctionalities += `<p>◈ ${functionality.functionality}</p>`
    })
  }

  let projectImages = ''
  if (project.image) {
    project.image.forEach(img => {
      projectImages += `<img src=${img.img} alt=${project.name} alt=${project.name} />`
    })
  }

  const modalContent = `
    <div class='modal-images'>
      ${projectImages}
    </div>
    <div class='modal-descriptions'>
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      ${userFunctionalities}
      ${adminFunctionalities}
      <a href=${project.repository} target='_blank' rel='noopener noreferrer'>
        <img src="./assets/images/techs/github.png" alt="Github Icon" title="Github Icon">
        REPOSITÓRIO
      </a>
    </div>
  `
  fillModalContent(modalContent)
  handleOpenModal()
})

document.getElementById('modal-close').addEventListener('click', handleCloseModal)

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') handleCloseModal()
})