import React from 'react';

import Pokedex from './components/pokedex/pokedex.component';
import Button from './components/button/button.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ],
      pokedex1: [],
      pokedex2: [],
      score1: 0,
      score2: 0,
      message:""
    }
  }

  dealCards = () => {
    const { cards, score2 } = this.state
    let deck = []
    let hand1 = []
    let i = cards.length
    for (let n=0; n < i; n++) {
      deck.push(cards[n])
    }
    
    while (i > 4) {
      let randomNumber = Math.floor(Math.random() * deck.length)
      hand1.push(deck[randomNumber])
      deck.splice(randomNumber, 1)
      i--
    }
    let hand2 = deck;
    this.setState({pokedex1: hand1})
    this.setState({pokedex2: hand2})
    let count = 0;
    for (let j=0; j<4; j++) {
      count = count + deck[j].base_experience
    }
    this.setState({score1: 872-count})
    this.setState({score2: count})

    if (count > 436) {
      this.setState({message: "Pokedex 2 won!"})
    } else if (count == 436) {
      this.setState({message: "It was a draw!"})
    } else {
      this.setState({message: "Pokedex 1 won!"})
    }
  }

  render() {
    const { pokedex1, pokedex2, score1, score2 } = this.state;
    return (
      <div className="App">
        <Pokedex key={1} id={1} pokedex={pokedex1} score={score1} />
        <Pokedex key={2} id={2} pokedex={pokedex2} score={score2}/>
        <Button action={this.dealCards} text={'Deal cards'}/>
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

export default App;
