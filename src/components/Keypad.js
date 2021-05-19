import React, {Component} from "react"

class Keypad extends Component {
  constructor() {
    super()
    this.state = {
      thePassword: ""
   }
   this.onKeyUp = this.onKeyUp.bind(this)
}

onKeyUp(event) {
  if (event.key === 'Enter'){
    console.log('Entering Password...)
   }
} 



  render() {
    return (
      <form>
        <h1>Enter Password Now<h1>
        <input type="password" value={this.state.thePassword} 
       name="thePassword" placeholder="Enter Password" onKeyPress={this.onKeyUp} />
       <p> Hit Enter to Continue<p>
      </form>
      )
    }
}


export default Keypad
