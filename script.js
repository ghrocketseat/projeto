function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir img

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir img

  if (html.classList.contains("light")) {
    //se tiver no light mode, adicionar imagem light mode
    img.setAttribute("alt", "./assets/bg-desktop-light.jpg")
  } else {
    // se tiver sem light mode, manter img normal
    img.setAttribute("alt", "./assets/bg-desktop.jpg")
  }
}