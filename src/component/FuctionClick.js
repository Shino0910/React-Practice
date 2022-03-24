import React from 'react'

function FuctionClick() {
    function clickHandler(){
        console.log("clicked")
    }
  return (
    <div>

        <button onClick={clickHandler}>Click Here </button>
          {/* not a  function call => clickHandler() */}
          {/* event is a function but not a function call */}
    </div>
  )
}

export default FuctionClick