import React, {useCallback, useState} from 'react';
import style from './Section.module.css';
import addIcon from '../assets/images/add.png';
import editIcon from '../assets/images/edit.png';
import removeIcon from '../assets/images/remove.png';
import Modal from "./Modal";
import AddCharacterForm from "./AddCharacterForm";
import useModalState from "../hooks/useModalState";
import CharacterCard from "./CharacterCard";

const Section = ({category}) => {

    const addCharacterModal = useModalState()

    const [characters, setCharacters] = useState(() => {
        const initialValue = JSON.parse(localStorage.getItem('characters'));

        if (initialValue) {
            return initialValue.filter((character) => character.category === category.name);
        }

        return [];
    })

    const onAddCharacter = (newCharacter) => {
        const allCharacters = JSON.parse(localStorage.getItem('characters'));
        const updatedCharacters = [...allCharacters, {...newCharacter, category: category.name}]
        setCharacters([...characters, {...newCharacter, category: category.name}])
        localStorage.setItem('characters', JSON.stringify(updatedCharacters))
    }

    const onRemoveCharacter = (removedCharacter) => {
        const allCharacters = JSON.parse(localStorage.getItem('characters'));
        const updatedCharacters = allCharacters.filter(character => {
           return character.name !== removedCharacter.name && character.category !== category.name
        })
        setCharacters(characters.filter(character => character.name !== removedCharacter.name))
        localStorage.setItem('characters', JSON.stringify(updatedCharacters))
    }

    return (
        <div className={style.sectionContainer}>
            <h2 className={style.sectionName}>
                {category.name}
            </h2>
            <img src={addIcon} alt='add button' style={{marginRight: 60}} onClick={addCharacterModal.open}/>
            <img src={editIcon} alt='edit button' style={{marginRight: 30}}/>
            <img src={removeIcon} alt='remove button' />

            {characters.map((character) => (
                <CharacterCard
                    character={character}
                    onRemove={onRemoveCharacter}
                    key={character.name}
                />
            ))}

            <Modal
                isOpen={addCharacterModal.isOpen}
                onClose={addCharacterModal.close}
            >
                <AddCharacterForm onSave={onAddCharacter}/>
            </Modal>
        </div>
    );
};

export default Section;