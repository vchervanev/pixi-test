import _ from 'pixi.js'
import React, { Component } from 'react'

class SpiralAnimator extends Component {

  render() {
    this.pixiApp = new PIXI.Application(400, 400,
      {
        antialias: true,
        backgroundColor: 0xFFFFFF,
        resolution: 1,
      }
    )

    return null
  }

  componentDidMount() {
    document.body.appendChild(this.pixiApp.view);
  }

}

export default SpiralAnimator
