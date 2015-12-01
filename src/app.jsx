import React, { Component } from 'react'
import { render } from 'react-dom'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import createPanel from './create-panel'

const store = window.ReduxStore
if (!store) {
  throw new Error('[Redux-Devtools-Script] You have to bind your Redux store first')
}

class Root extends Component {
  render() {
    return (
      <div>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    )
  }
}

render(<Root/>, createPanel())
