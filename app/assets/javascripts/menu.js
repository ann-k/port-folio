document.addEventListener("turbolinks:load", () => {
  if (document.getElementById("index") || document.getElementById("account")) {
    document.getElementsByTagName("nav")[0].classList.add("nav-shown")
  }
})
