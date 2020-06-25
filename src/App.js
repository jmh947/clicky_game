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
        let newImages = this.state.images.map(cards => {
            if(cards.id.toString().includes(id)) {
                if(cards.clicked) {
                    this.setState({
                        score: 0
                    })
                } else {
                    this.setState({
                        score: this.state.score +1
                    })
                    if(this.state.score >= this.state.topscore) {
                        this.setState({
                            topscore: this.state.topscore +1
                        })
                    } 
                    cards.clicked = true
                }
            }
            return cards
        })
        if(this.state.score === 0) {
            newImages = newImages.map(cards => {
                cards.clicked = undefined
                return cards
            })
        }
        newImages = newImages.sort(()=> {
            return Math.random() - 0.5
        })

        this.setState({
            images: newImages
        })
    //  const newImages = this.state.images.sort(()=> Math.random()-0.5)
    //   this.setState({
    //       images: newImages
    //   })
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