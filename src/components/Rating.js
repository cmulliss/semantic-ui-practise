import React from 'react'
import Rating from '@bit/semantic-org.semantic-ui-react.rating'

// const style = (
//   <link
//     rel='stylesheet'
//     href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'
//   />
// )

const RatingExampleClearable = () => <Rating maxRating={5} clearable />

export default () => (
  <div>
    {style}
    <RatingExampleClearable />
  </div>
)
