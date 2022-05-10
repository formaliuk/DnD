import React from 'react';
import style from './CharacterCard.module.css'

const CharacterCard = (props) => {

    return (
        <div className={style.card} >
            <h3 className={style.name}>
                {props.card.charName}
            </h3>
            <p className={style.description}>
                {props.card.charStory}
            </p>
        </div>
    );
};

export default CharacterCard;