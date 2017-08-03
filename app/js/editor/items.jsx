import React from 'react'
import Item from './Item.jsx'

const Items = (props) => {
  return <div>
    {
      props.items.map((item, i) => <Item key={i} data={item} />)
    }
  </div>
}

export default Items