import React from 'react'

const Category = ({ cat }) => {
  const setCategory = (currentCat) => {
    setChangeCategory(currentCat)
  }

  return (
    <button type='button' className='cat-btn' onClick={() => setCategory(cat[0])}>
      {cat}
    </button>
  )
}

export default Category
