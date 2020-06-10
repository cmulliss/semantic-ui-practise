import React from 'react'

const Menu = () => {
  return (
    <div>
      <h1>Menu: fixed menu at top</h1>
      <h2>Goes outside container</h2>
      <div className='ui fixed four item inverted menu'>
        <div className='active ui  purple item'>
          <a href='#' />
          Home
        </div>
        <div className=' item'>
          <a href='#' />
          About
        </div>
        <div className=' item'>
          <a href='#' />
          News
        </div>
        <div className='item'>
          <a href='#' />
          Contact
        </div>
      </div>
      <h1>Left and Right Menus</h1>
      <div className='ui inverted menu'>
        <div className='active ui  purple item'>
          <a href='#' />
          Home
        </div>
        <div className=' item'>
          <a href='#' />
          About
        </div>
        <div className='right menu'>
          <div className='ui transparent left icon input'>
            <input type='text' placeholder='search' />
            <i className='teal large search icon' />
          </div>
          <div className=' item'>
            <a href='#' />
            Register
          </div>
          <div className='item'>
            <a href='#' />
            Login
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

// can also do vertical menu
