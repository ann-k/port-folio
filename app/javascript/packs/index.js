function toggleOptions(id) {
  let options = document.getElementById(id)
  options.style.display === "none" ? options.style.display = "block" : options.style.display = "none"

  let containerElement = document.getElementsByClassName("index-inner-container")[0]
  let containerRect = containerElement.getBoundingClientRect()
  let elementRect = event.currentTarget.getBoundingClientRect()
  let offsetTop   = elementRect.top - containerRect.top + 48
  let offsetRight   = elementRect.right - containerRect.right

  options.style.top = offsetTop + "px"
  options.style.right = -offsetRight + "px"

  console.log("hello, id is " + id);
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = Array.from(document.getElementsByClassName('button-options'))
  const portfolioIds = buttons.map(button => parseInt(button.dataset.object_id))

  buttons.map((button, i) => {
    button.onclick = () => {
      toggleOptions(portfolioIds[i])
    }
  })
})
