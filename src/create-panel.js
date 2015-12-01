export default function () {
  let panel = document.getElementById('redux-debug-panel')
  if (!panel) {
    panel = document.createElement('div')
    panel.id = 'redux-debug-panel'
    document.body.appendChild(panel)
  }
  return panel
}
