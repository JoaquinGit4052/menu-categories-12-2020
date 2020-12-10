import React from 'react'

const Item = ({ name, price, desc, img }) => {
  return (
    <>
      <div className='item'>
        <img src={img} alt='' />
        <h3>{name}</h3>
        <p className='item-price'>{price}</p>
        <p className='item-desc'>{desc}</p>
      </div>
    </>
  )
}

export default Item
