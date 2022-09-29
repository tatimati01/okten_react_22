import React from 'react';

const Character = (props) => {
    const {character} = props;

    return (
        <div>
            <h2>{character.id} - {character.name}</h2>
            <p>Status - {character.status}</p>
            <p>Species - {character.species}</p>
            <p>Gender - {character.gender}</p>
            <img src={character.image} alt={character.name}/>
        </div>
    );
};

export default Character;