import React from 'react'

const Forms = () => {
  return (
    <div className='ui container'>
      <h1>Form</h1>
      <form className='ui form'>
        <div className='field'>
          <label>Name</label>
          <input type='text' className='ui input' placeholder='name' />
        </div>
      </form>
    </div>
  )
}

export default Forms
