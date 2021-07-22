import React from 'react';

import Pokedex from './components/pokedex/pokedex.component';
import Button from './components/button/button.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dealingCards: [],
      hands: [{
        id: 1,
        cards: [],
        score: 0 
      },
      {
        id: 2,
        cards: [],
        score: 0 
      }]
    }
  }

  dealCards = () => {
    let cards = [0,1,2,3,4,5,6,7,8,9]
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
