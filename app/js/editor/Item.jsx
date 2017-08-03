import React from 'react'

const Item = (props) => {
  const item = props.data
  return <li>R:{item.radius}, S: {item.speed}
    <ul>
      {
        item.children && item.children.map((item, i) => <Item data={item} key={i} />)
      }
    </ul>

  </li>

}

export default Item