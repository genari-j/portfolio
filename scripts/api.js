const githubUser = "https://api.github.com/users/genari-j"
const githubUserRepos = "https://api.github.com/users/genari-j/repos"

async function getAPI(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("Erro ao obter dados da API:", error)
    return null
  }
}

async function fetchData() {
  const userDataPromise = getAPI(githubUser)
  const userReposPromise = getAPI(githubUserRepos)

  const [userData, userRepos] = await Promise.all([userDataPromise, userReposPromise])
  console.log(userRepos)

  const avatar = document.querySelector("#avatar")
  const victorsName = document.querySelector("#victors-name")
  const spinnerElement = document.querySelector(".loading-container")

  setTimeout(() => {
    avatar.onload = function () {
      spinnerElement.style.display = "none"
      avatar.style.display = "block"
    }

    avatar.src = userData.avatar_url || "João Victor - Imagem"
    victorsName.innerText = userData.name || "João Victor Genari"
  }, 500)
}
fetchData()