import React from 'react'

const Items = (props) => {

return <div>
        {
            props.items.map((item, i) => (<div key={i}> R:{ item.radius }, S: { item.speed } </div>))
        }
    </div>
}

export default Items