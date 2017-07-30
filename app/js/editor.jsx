import React from 'react'
import { render } from 'react-dom'
import Items from './editor/items.jsx'

import state from './state'
const node = document.querySelector('#reactRoot')
const element = <div>
    <Items items={state.items} />
</div>

render(element, node)