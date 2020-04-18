document.addEventListener("turbolinks:load", () => {
  if (document.getElementById("index") || document.getElementById("account")) {
    document.getElementsByTagName("nav")[0].classList.add("nav-shown")
  }
})

function showMenu() {
  // document.getElementById(elementId).classList.add("nav-item-shown")
  event.target.classList.add("nav-item-shown")
}

function hideMenu() {
  event.target.classList.remove("nav-item-shown")
}
