import React from 'react';
import CharacterCard from './CharacterCard';
import AddCard from "./AddCard";
import style from './CharacterSection.module.css';

const CharacterSection = (props) => {

    const { section } = props;
    const { name, cards } = section;

    return (
        <div>
            <h2 className={style.sectionName}>
                {name}
            </h2>
            <div className={style.cards}>
                {cards.map((card) => (
                    <CharacterCard card={card} key={card.charId}/>
                ))}
            </div>
        </div>
    );
};

export default CharacterSection;