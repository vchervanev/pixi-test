import React from 'react'
import { render } from 'react-dom'
import editor from './editor.jsx'

const node = document.querySelector('#reactRoot')

render(editor, node)