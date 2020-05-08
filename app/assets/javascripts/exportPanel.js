function openExportPanel() {
  let exportPanel = document.getElementById("exportPanel")

  if (exportPanel.style.display === "block") {
    exportPanel.style.display = "none"
  } else {
    exportPanel.style.display = "block"
  }
}
