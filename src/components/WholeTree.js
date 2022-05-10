import React, {useState} from 'react';
import CharacterSection from './CharacterSection';
import style from './WholeTree.module.css';
import sections from "../data/sections";
import AddCard from "./AddCard";
import AddCardModal from "./AddCardModal";

const WholeTree = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={style.body}>
            <h1 className={style.header}>
                Приключение в Сайне
            </h1>
            {sections.map((section) => (
                <CharacterSection section={section} key={section.sectionId} />
            ))}
            <AddCard />
            <AddCardModal active={modalActive} setActive={setModalActive}/>
            <button onClick={() => setModalActive(true)}>ДОБАВИТЬ</button>
        </div>
    );
};

export default WholeTree;