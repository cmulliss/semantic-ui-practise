import React from 'react'

import './App.css'
import Icons from './Icons'
import Forms from './Forms'
import Menu from './Menu'

function App() {
  return (
    <div className='app'>
      <div className='ui container'>
        <div className='ui segment'>
          <Menu />
        </div>
        <div className='ui segment'>
          <h1>semantic-ui</h1>
          <button className='ui fluid button red'>Fluid Red Button</button>
          <button className='ui purple fade animated button'>
            <div className='visible content'>Sign-up for a Pro account</div>
            <div className='hidden content'>$12.99 a month</div>
          </button>
          <button className='ui primary button tiny'>Primary button</button>
          <button className='ui  secondary button large'>
            Secondary button
          </button>

          <div className='ui segment'>
            <button className='ui green animated button'>
              <div className='visible content'>Next-></div>
              <div className='hidden content'>Hello!</div>
            </button>
            <button className='ui basic button'>Basic button</button>
            <button className='ui button loading blue'>Loading ...</button>
            <button className='ui disabled button'>Disabled</button>
            <button className='ui button active'>Active</button>
          </div>
          <div className='ui segment'>
            <h3>Groups of buttons</h3>
            <div className='ui buttons'>
              <button className='ui button orange'>One</button>
              <div className='or' />
              <button className='ui button green'>Two</button>
            </div>
            <hr />
            <div className='ui buttons'>
              <button className='ui button orange'>Orange</button>
              <div className='or' />
              <button className='ui basic button green'>basic green</button>
              <div className='or' />
              <button className='ui button blue'>Blue</button>
            </div>
          </div>
          <div className='segment ui'>
            <button className='ui facebook button'>
              <i className='ui facebook icon' />
              Facebook
            </button>
            <button className='ui twitter button'>
              <i className='ui twitter icon' />
              Twitter
            </button>
            <button className='ui instagram button'>
              <i className='ui instagram icon' />
              Instagram
            </button>
            <button className='ui youtube button'>
              <i className='ui youtube icon' />
              YouTube
            </button>
          </div>

          <div className='segment ui'>
            <h3>Circular with Icon</h3>
            <button className='ui circular blue icon button'>
              <i className='large snowflake icon' />
            </button>
            <button className='ui circular yellow icon button'>
              <i className='sun icon' />
              Sun
            </button>
            <h3>Labelled</h3>
            <button className='ui labeled icon blue button'>
              <i className='pause icon' />
              Pause
            </button>
            <button className='ui right labeled icon green button'>
              <i className='right arrow icon' />
              Next
            </button>
          </div>
        </div>
        <div>
          <button className='ui right floated green button'>
            Right Floated
          </button>
          <button className='ui left floated pink button'>Left Floated</button>
        </div>
        <Icons />
        <Forms />
      </div>
    </div>
  )
}

export default App

/*
<p>Rating 3 star</p>
      <Rating className='ui rating' data-rating='3' data-max-rating='5' />
*/
