import React, {Component} from "react"
import NavBar from "./components/navBar"
import JumboTron from "./components/jumboTron"
import Card from "./components/card"
import pictures from "./data/images.json"


class App extends Component {
    state= {
       images: pictures,
       score: 0,
       topscore: 0 
    }
    handleSubmit = id=> {
     const newImages = this.state.images.sort(()=> Math.random()-0.5)
      this.setState({
          images: newImages
      })
    }
    render(){
        return(
            <div>
               <NavBar score= {this.state.score}
               topScore= {this.state.topscore}
               />
               <JumboTron/>
               {console.log(this.state.images)}
               <Card superhero ={this.state.images} handleSubmit = {this.handleSubmit} />
            </div>
        )
    }
}

export default App