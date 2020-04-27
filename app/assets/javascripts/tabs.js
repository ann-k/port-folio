function openTab(evt, tabName) {
  var i, tabContent, tablinks;

  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("turbolinks:load", function() {
  // window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("defaultTab").click();
  // });
})

// document.addEventListener("turbolinks:load", function() {
//   document.getElementsByTagName('form')[0].onsubmit = event => {
//     event.preventDefault();
//   }
// })
