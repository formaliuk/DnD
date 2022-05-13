import React from 'react';
import style from './Modal.module.css'

const Modal = ({onClose, isOpen, children}) => {


    return (
        <div className={isOpen ? `${style.modal} ${style.active}` : style.modal} onClick={onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;