import React from 'react'

const Dividers = () => {
  return (
    <div>
      <div className='ui header hidden' />
      <h1 className='ui header'>Header 1</h1>

      <div className='ui horizontal divider'>Horizontal Divider</div>
      <div className='ui star rating'>
        <i className=' red icon' />
      </div>
    </div>
  )
}

export default Dividers

// <div className='ui vertical divider'>Vertical Divider</div>
