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
      hands: [
        {
          id: 1,
          hand: [],
          score: 0 
        },
        {
          id: 2,
          hand: [],
          score: 0 
        }
      ]
    }
  }

  dealCards = () => {
    let deck = this.state.cards
    let hand1 = []
    let i = deck.length
    while (i > 4) {
      let randomNumber = Math.floor(Math.random() * deck.length)
      hand1.push(deck[randomNumber])
      deck.splice(randomNumber, 1)
      i--
    }
    let hand2 = deck;


    console.log(this.state.hands)
  }

  render() {
    return (
      <div className="App">
        {this.state.hands.map(({id, ...otherHandsProps}) => (
          <Pokedex key={id}  id={id} {...otherHandsProps} />
        ))}
        <div className='deal-btn'>
          <Button action={this.dealCards}/>
        </div>
      </div>
    );
  }
}

export default App;
