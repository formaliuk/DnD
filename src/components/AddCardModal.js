import React from 'react';
import style from './Modal.module.css'

const AddCardModal = ({active, setActive}) => {
    return (
        <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>

            </div>
        </div>
    );
};

export default AddCardModal;