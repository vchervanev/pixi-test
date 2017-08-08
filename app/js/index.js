
import React from 'react'
import { render } from 'react-dom'

import editor from './editor.jsx'
import SpiralAnimator from './animator/SpiralAnimator.jsx'

const node = document.querySelector('#reactRoot')

const app = <div>
  {editor}
  <SpiralAnimator />
</div>

render(app, node)