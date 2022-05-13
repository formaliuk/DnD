import React from 'react';
import style from './CharacterCard.module.css'

const CharacterCard = ({character, onRemove}) => {


    return (
        <div className={style.card} >
            <h3 className={style.name}>
                {character.name}
            </h3>
            <p className={style.description}>
                {character.description}
            </p>
            <button onClick={() => onRemove(character)}>delete</button>
        </div>
    );
};

export default CharacterCard;