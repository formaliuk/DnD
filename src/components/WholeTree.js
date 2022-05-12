import React, {useState} from 'react';
import CharacterSection from './CharacterSection';
import style from './WholeTree.module.css';
import AddCard from "./AddCategory";
import AddCategoryModal from "./AddCategoryModal";

const WholeTree = () => {
    const [modalActive, setModalActive] = useState(false);
    const [categories, setCategories] = useState(() => {
        const initialValue = JSON.parse(localStorage.getItem('categories'));
        return initialValue || [];
    })

    const onAddCategory = (category) => {
        const updatedCategories = [...categories, category];
        setCategories(updatedCategories);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
    }


    return (
        <div className={style.body}>
            <h1 className={style.header}>
                Приключение в Сайне
            </h1>
            {categories.map((category) => (
                <CharacterSection category={category} key={category.name} />
            ))}
            <AddCard
                active={modalActive}
                setActive={setModalActive}
            />
            <AddCategoryModal
                isOpen={modalActive}
                onClose={() => setModalActive(false)}
                onSave={onAddCategory}
            />
        </div>
    );
};

export default WholeTree;