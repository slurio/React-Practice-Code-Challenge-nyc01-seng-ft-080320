import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    index: 0,
    sushiDisplay: [],
    sushiAte: [],
    wallet: 50
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => {
      this.setState({
        sushiDisplay: sushiData.splice(this.state.index, 4)
      })
    })
  }

  clickHandler = () => {
    if(this.state.index === 96){
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 4
      })
    }
    this.componentDidMount()
  }

  eatSushi = (sushiObj) => {
    let array = [...this.state.sushiAte, sushiObj]

    if(this.state.wallet >= sushiObj.price) {
      this.setState({
        sushiAte: array,
        wallet: this.state.wallet - sushiObj.price
      })
    } 
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} sushiAte={this.state.sushiAte} sushiArray={this.state.sushiDisplay} clickHandler={this.clickHandler}/>
        <Table wallet={this.state.wallet} sushiAte={this.state.sushiAte}/>
      </div>
    );
  }
}

export default App;