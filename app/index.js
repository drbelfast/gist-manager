import React, { Component } from 'react'
import ReactDom from 'react-dom'

class Root extends Component {
  render() {
    return (
      <div>
        <h1 className="success" >hello there</h1>
      </div>
    )
  }
}

ReactDom.render(
  <Root />,
  document.getElementById('root')
)
