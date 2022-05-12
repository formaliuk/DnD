import React, {useState} from 'react';
import style from './CharacterSection.module.css';
import addIcon from '../assets/images/add.png';
import editIcon from '../assets/images/edit.png';
import removeIcon from '../assets/images/remove.png';



const CharacterSection = ({category}) => {

    const [characters, setCharacters] = useState(() => {
        const initialValue = JSON.parse(localStorage.getItem('characters'));

        if (initialValue) {
            return initialValue.filter((character) => character.category === category);
        }

        return [];
    })

    const onAddCharacter = (newCharacter) => {
        const updatedCharacters = [...characters, newCharacter]
        setCharacters(updatedCharacters)
        localStorage.setItem('characters', "updatedCharacters")
    }

    return (
        <div>
            <h2 className={style.sectionName}>
                {category.name}
            </h2>
            <img src={addIcon} alt='add button' onClick={onAddCharacter}/>
            <img src={editIcon} alt='edit button' style={{marginLeft: 30}}/>
            <img src={removeIcon} alt='remove button' style={{marginLeft: 60}}/>
        </div>

    );
};

export default CharacterSection;