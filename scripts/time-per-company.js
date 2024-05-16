const timePerCompany = document.querySelector('#timePerCompany')

function calcularMediaTempo(dataInicio) {
  // Obtém a data atual
  const dataAtual = new Date()

  // Calcula a diferença entre as datas em milissegundos
  const diferenca = dataAtual - dataInicio

  // Converte a diferença de milissegundos para meses
  const meses = diferenca / (1000 * 60 * 60 * 24 * 30.4375)

  // Calcula os anos e meses completos
  const anos = Math.floor(meses / 12)
  const mesesRestantes = Math.round(meses % 12)

  // Retorna a média de tempo no formato desejado
  return `${' Dez. 2022 - O momento • ' + anos + ' ano(s) ' + mesesRestantes + ' meses'}`
}

// Exemplo de uso:
const dataInicio = new Date('2022-12-07') // Data de início do trabalho na empresa
const mediaTempo = calcularMediaTempo(dataInicio)
timePerCompany.innerHTML = mediaTempo