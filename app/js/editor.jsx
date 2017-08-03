import React from 'react'
import { render } from 'react-dom'
import Items from './editor/Items.jsx'

import state from './state'
const node = document.querySelector('#reactRoot')
const element = <div>
  <Items items={state.items} />
  <button onClick={() => alert(1)}>AAA</button>
</div>

render(element, node)