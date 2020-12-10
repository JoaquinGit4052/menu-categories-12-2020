import React, { useState } from 'react'
import Item from './Item'
import data from '../data'

const Main = () => {
  const [currentCategory, setCurrentCategory] = useState('all')
  const categories = new Set(
    data.map((item) => {
      return item.category
    })
  )
  const allCategories = ['all', ...categories]
  let newData = data.filter((item) => item.category === currentCategory)
  const changeCategory = (category) => {
    setCurrentCategory(category)
    newData = data.filter((item) => item.category === currentCategory)
  }
  return (
    <>
      <div className='container'>
        <h1>All Menus</h1>

        <div className='cat-container'>
          {allCategories.map((category, index) => {
            return (
              <button key={index} type='button' className='cat-btn' onClick={() => changeCategory(category)}>
                {category}
              </button>
            )
          })}
        </div>
        {currentCategory === 'all' ? (
          <div className='items-container'>
            {data.map((item) => {
              const { id, title, price, desc, img } = item
              return <Item key={id} name={title} price={price} desc={desc} img={img} />
            })}
          </div>
        ) : (
          <div className='items-container'>
            {newData.map((item) => {
              const { id, title, price, desc, img } = item
              return <Item key={id} name={title} price={price} desc={desc} img={img} />
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Main
