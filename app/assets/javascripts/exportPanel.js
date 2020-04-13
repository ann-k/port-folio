function openExportPanel() {
  let exportPanel = document.getElementsByClassName("export-panel")[0]

  if (exportPanel.style.display === "block") {
    exportPanel.style.display = "none"
  } else {
    exportPanel.style.display = "block"
  }
}
