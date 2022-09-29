import React, {useEffect, useState} from 'react';

import Character from "../Character/Character";

const Characters = () => {

        let [characters, setCharacters] = useState([]);

        useEffect(() => {
            fetch('https://rickandmortyapi.com/api/character')
                .then(value => value.json())
                .then(value => {
                    setCharacters(value.results)
                })
        }, [])

        return (
            <div>
                {
                    characters
                        .map(character => <Character key={character.id} character={character}/>)
                        .splice(0, 6)
                }
            </div>
        );
    }
;

export default Characters;