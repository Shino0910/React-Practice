import React, { Component } from 'react'

class ClassClick extends Component {
    clickMe(){
        console.log("Click Received")
    }
  render() {
    return (
      <div>
          <button onClick={this.clickMe}>Click Me 2 </button>
      </div>
    )
  }
}

export default ClassClick