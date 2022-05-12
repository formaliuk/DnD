import React from 'react';
import style from './AddCategory.module.css';

const AddCategory = ({setActive}) => {

    return (
        <div className={style.card}>
            <h5 className={style.header}>
                Новый персонаж в игре?
            </h5>
            <button onClick={() => setActive(true)}>СОЗДАТЬ КАТЕГОРИЮ</button>
        </div>
    );
};

export default AddCategory;