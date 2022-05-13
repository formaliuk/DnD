import React, {useCallback, useState} from 'react';
import Section from './Section';
import style from './WholeTree.module.css';
import AddCard from "./AddCategory";
import Modal from "./Modal";
import AddCategoryForm from "./AddCategoryForm";
import useModalState from "../hooks/useModalState";

const Tree = () => {

    const addCategoryModal = useModalState()

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
                <Section category={category} key={category.name}/>
            ))}
            <AddCard
                active={addCategoryModal.isOpen}
                setActive={addCategoryModal.open}
            />
            <Modal
                isOpen={addCategoryModal.isOpen}
                onClose={addCategoryModal.close}
            >
                <AddCategoryForm onSave={onAddCategory} onClose={addCategoryModal.close}/>
            </Modal>



        </div>
    );
};

export default Tree;