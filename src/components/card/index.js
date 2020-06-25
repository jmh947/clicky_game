import React from "react";
/* props{
  Superhero
} */
function Card(props) {
  console.log(props.superhero)
    return(
        <div className= "container ">
      <div className= "row">
  
     {props.superhero.map((picture, index) => {
       return(
         <div className= "col-sm-3 mt-5" key= {index}>
          
        <img src={picture.image} onClick = {()=> props.handleSubmit(picture.id)}/>
    
         </div>
       )
     })}
     
 
    </div>
  </div>
    )
}

export default Card