import React from 'react';
import style from './AddCard.module.css';

const AddCard = () => {
    return (
        <div className={style.card}>
            <h5 className={style.header}>
                Новый персонаж в игре?
            </h5>
            <button>Добавить</button>
        </div>
    );
};

export default AddCard;