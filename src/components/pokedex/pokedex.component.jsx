import React from 'react';

import PokeCard from '../pokecard/pokecard.component';
import PokeCardBack from '../pokecardback/pokecardback.component';

import './pokedex.styles.css'

const Pokedex = props => {
    let poke = props.pokedex
    if (poke == "") {            
        return(
            <div className='pokedex'>
                <div className='pokedex-hand'>
                    <div className='pokedex-header'>
                        <h1 className='pokedex-title'> Pokedex {props.id} </h1>
                        <p className='pokedex-points'>Score: {props.score}</p>
                    </div>
                        <PokeCardBack />
                        <PokeCardBack />
                        <PokeCardBack />
                        <PokeCardBack />
                </div>
            </div>
        )
    } else {
        return(
            <div className='pokedex'>
                <div className='pokedex-hand'>
                    <div className='pokedex-header'>
                        <h1 className='pokedex-title'> Pokedex {props.id} </h1>
                        <p className='pokedex-points'>Score: {props.score}</p>
                    </div>
                    {props.pokedex.map(({id, ...otherCardProps}) => (
                        <PokeCard key={id} id={id} {...otherCardProps} />
                    ))}
                </div>
            </div>
        )
    }
}
export default Pokedex;

