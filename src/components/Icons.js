import React from 'react'

import './App.css'

const Icons = () => {
  return (
    <div className='container'>
      <div className='ui segment'>
        <h3>Icons</h3>
        <div>
          <i className='bug huge  orange icon'>bug</i>
          <h1>
            <i className='paypal icon' />
          </h1>
        </div>
        <h3>Flags (Can't be resized!)</h3>

        <i className='uk flag' />
        <i className='france flag' />
        <i className='myanmar flag' />
      </div>
    </div>
  )
}

export default Icons
