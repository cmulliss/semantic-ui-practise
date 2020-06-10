import React from 'react'

const Forms = () => {
  return (
    <div className='ui container'>
      <h1>
        <i className='puzzle piece  orange icon'>Form</i>
      </h1>
      <form style={{ width: '50%' }} className='ui form'>
        <div className=' required field'>
          <label>Name</label>
          <input type='text' className='ui input' placeholder='name' />
        </div>
        <div className='field'>
          <label>Email</label>

          <input type='email' className='ui input' placeholder='email' />
        </div>
        <div className='field'>
          <label>Password</label>
          <input type='password' className='ui input' placeholder='password' />
        </div>

        <div className='field'>
          <label>without icon</label>
          <div className='ui left labeled input'>
            <div className='ui label green'>£</div>
            <input type='text' placeholder='How much?' />
            <div className='ui green label'>.00</div>
          </div>
          <div className='field'>
            <label>with icon</label>
            <div className='ui left icon input'>
              <input type='text' placeholder='search' />
              <i className=' search icon' />
            </div>
          </div>
        </div>
        <div className='field'>
          <label>Tags</label>
          <div className='ui right labeled left icon input'>
            <i className='orange star icon' />
            <input type='text' placeholder='Enter tags' />
            <div className='ui orange tag label'>Tag</div>
          </div>
        </div>
      </form>
      <h2>Massive form</h2>
      <div className='ui massive form'>
        <div className='two fields'>
          <div className='field'>
            <label>First Name</label>
            <input placeholder='First Name' type='text' />
          </div>
          <div className='field'>
            <label>Last Name</label>
            <input placeholder='Last Name' type='text' />
          </div>
        </div>
        <div className='ui blue submit button'>Submit</div>
      </div>
    </div>
  )
}

export default Forms

// can also use fields  to group several together
