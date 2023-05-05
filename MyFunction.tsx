import React from 'react'

function MyFunction({name, price, sale}) {
  return (
    <div>
        <span>{name}</span>
        <span>{price}</span>
        <span>{sale}</span>
    </div>
  )
}

export default MyFunction