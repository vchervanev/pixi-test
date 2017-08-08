import React from 'react'
import Items from './editor/Items.jsx'
import state from './state'

const editor = (<div> AAA
  <Items items={state.items} />
  <button onClick={() => alert(1)}>AAA</button>
</div>)

export default editor
