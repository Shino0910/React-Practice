import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FuctionClick from './component/FuctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';


class App extends Component {
render(){
  return(
  <div className="App"> 

   <EventBind 測試/>
   {/* <FuctionClick /> */}
   {/* <ClassClick />  */}
   {/* <Counter /> */}
   {/* <Message /> */}
   {/* <Greet name="Bruce"  heroName="superman"> 
   <p> This is child props </p>
   </Greet>
   <Greet name ="Tony" heroName="Ironman">
     <button>Generate</button>
   </Greet>
   <Greet name ="Wanda" heroName="Witch"/>
   
   <Welcome name="Bruce"  heroName="superman" />
   <Welcome  name ="Tony" heroName="Ironman" />
   <Welcome name ="Wanda" heroName="Witch" />
 */}

</div>
  )
}  
}

export default App;
