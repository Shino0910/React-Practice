import React, {Component}  from 'react'



class  Message extends Component {
    constructor(){
        super()
        this.state ={
            message:'Welcome Visitor2'
        }
    }
changeMessage(){
  this.setState({
  message: 'Thank you for your submit'
  })
}


    render(){
        return (
        <div>
        <h1>{this.state.message} </h1>
        <button onClick={()=>this.changeMessage()}>Submit</button>
       </div>
        )}
}

export default Message