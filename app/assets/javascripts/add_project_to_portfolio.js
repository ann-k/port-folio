function showBlock() {
  document.getElementById("addProjectToPortfolio").style.display = "block"
}

document.addEventListener("turbolinks:load", function() {
  // window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("addProjectToPortfolio").click();
    console.log(document.getElementById("addProjectToPortfolio"));
  // });
})
