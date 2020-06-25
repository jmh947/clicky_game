import React from "react";

// props{
//   score:0,
//   topScore:0
// }
function NavBar(props) {
    return(
    <nav className="navbar">Score: {props.score} | Top Score: {props.topScore}</nav>

  
  )

}


export default NavBar;