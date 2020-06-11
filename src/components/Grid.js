import React from 'react'

const GridSystem = () => {
  return (
    <div>
      <h1>Computer or tablet only grid etc</h1>
      <div className='ui computer only equal width grid'>
        <div className='olive column' />
        <div className='teal column' />
        <div className='orange column' />
      </div>

      <h1>Stackable grid for responsiveness</h1>
      <div className='ui equal width stackable grid'>
        <div className='green column'>
          <p>
            Yar Pirate Ipsum Letter of Marque gangway come about Brethren of the
            Coast Jack Ketch rigging lass prow doubloon Plate Fleet. Fire in the
            hole weigh anchor piracy brig topmast lad dance the hempen jig
            barque bounty handsomely. Chase bounty square-rigged careen hardtack
            league topgallant lad keel spyglass.
          </p>
        </div>
        <div className='red column'>
          <p>
            Lookout pink Buccaneer spirits scallywag bilge rat tackle lateen
            sail furl sloop. Bilged on her anchor gibbet haul wind lookout fore
            dead men tell no tales pillage mutiny splice the main brace keel.
            Trysail fore boatswain bowsprit jury mast starboard execution dock
            bucko grog blossom scuppers.
          </p>
        </div>
        <div className='blue column'>
          <p>
            Loaded to the gunwalls swing the lead doubloon furl league crack
            Jennys tea cup keel code of conduct run a shot across the bow hulk.
            Black spot rope's end crack Jennys tea cup piracy bilge rat case
            shot broadside run a shot across the bow port draught. Pink cable
            Sea Legs sheet scuttle tackle brig keelhaul draught Shiver me
            timbers.
          </p>
        </div>
      </div>
      <h1>Grid system: 16 columns</h1>
      <div className='ui container'>
        <div className='ui three column grid'>
          <div className='black column' />
          <div className='teal column' />
          <div className='column'>
            <div className='ui equal width grid'>
              <div className='red column' />
              <div className='orange column' />
              <div className='green column' />
              <div className='blue column' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridSystem

// can nest grids
