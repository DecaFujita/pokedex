import React from 'react';

import PokeCard from '../pokecard/pokecard.component';

import './pokedex.styles.css'

class Pokedex extends React.Component {
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
            ]
          }
    }

    render() {
        return(
            <div className='pokedex'>
                <div className='pokedex-hand'>
                    <div className='pokedex-header'>
                        <h1 className='pokedex-title'> Pokedex {this.props.id}</h1>
                        <p className='pokedex-points'>Score: {this.props.score}</p>
                    </div>
                    {this.state.cards
                        .filter((card, index) => index < 4 )
                        .map(({id, ...otherCardsProps}) => (
                            <PokeCard key={id} id={id} {...otherCardsProps} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;

