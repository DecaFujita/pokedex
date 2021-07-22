import React from 'react';
import Pokedex from './components/pokedex/pokedex.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  dealCards() {

  }

  render() {
    return (
      <div className="App">
        {this.state.hands.map(({id, ...otherHandsProps}) => (
          <Pokedex key={id}  id={id} {...otherHandsProps} />
        ))}
      </div>
    );
  }
}

export default App;
