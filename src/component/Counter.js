import React, { Component } from 'react'



class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
      }

    increment(){
        this.setState(
            (prevState)=>({
                count:prevState.count +1 
            })
            //count :this.state.count +1 

        )
    }  

    decrement(){
        this.setState({
            count :this.state.count -1 
        })
    }  

    increment5(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    
    

    }

  render() {
    return (
        <div>
      <div>Count -{this.state.count}</div>
      <button onClick={()=>{this.increment5()}}> Generate </button>
      <br/>
      <button onClick={()=>{this.decrement()}}> Try it !</button>
      </div>
    )
  }
}

export default Counter
 