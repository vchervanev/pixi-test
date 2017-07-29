import React from 'react'
import { render } from 'react-dom'
const node = document.querySelector('#reactRoot')
const element = <div>Hello World!</div>

render(element, node)