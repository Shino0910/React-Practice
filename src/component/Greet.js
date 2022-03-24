import React from "react";

const Greet = (props)=> {
    console.log(props)
    return  (
    <div>
    <h1>  Hi {props.name} a.k.a {props.heroName}  </h1>
     {props.children}
    </div>
     )
}

// destructing props
// const Greet = ({name, heroName})=> {
//     return  (
//     <div>
//     <h1>  Hi {name} a.k.a {heroName}  </h1>
//      {props.children}
//     </div>
//      )
// }

// const Greet = (props)=> {
//    const {name ,heroName} =props
//     return  (
//     <div>
//     <h1>  Hi {name} a.k.a {heroName}  </h1>
//      {props.children}
//     </div>
//      )
// }





export default Greet
