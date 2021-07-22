import React from 'react';

import './pokecard.styles.css';

// const ImgUrl = (cod) => {
//     if (cod < 10) {
//         return(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/00${cod}.png`)
//     } else if (cod > 9 && cod < 100) {
//         return(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0${cod}.png`)
//     } else {
//         return(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cod}.png`)
//     }
// }


const PokeCard = ({id, name, type, base_experience}) => (
    <div className='pokecard'>
        <h1 className='pokecard-name'>{name}</h1>
        <div
        className='pokecard-img'
        style={{
            backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`
            // backgroundImage: 'url(https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png)'
        }}
        />
        <div className='pokecard-info'>
            <p className='pokecard-type'>Type: {type}</p>
            <p className='pokecard-exp'>EXP: {base_experience}</p>
        </div>
    </div>
)

export default PokeCard;