function showMenuItem() { event.target.classList.add("nav-item-shown") }
function hideMenuItem() { event.target.classList.remove("nav-item-shown") }

document.addEventListener('DOMContentLoaded', () => {
  const navItems = Array.from(document.getElementsByClassName('nav-item'))

  navItems.map((navItem) => {
    navItem.onmouseenter = () => showMenuItem()
    navItem.onmouseleave = () => hideMenuItem()
  })
})
