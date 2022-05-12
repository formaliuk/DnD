import React, {useState} from 'react';
import style from './AddCategoryModal.module.css'

const AddCategoryModal = ({onSave, onClose, isOpen}) => {

    const [name, setName] = useState('');


    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSave({name});
        onClose();
    }


    return (
        <div className={isOpen ? `${style.modal} ${style.active}` : style.modal} onClick={onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>

                <form onSubmit={handleSubmit} className={style.form}>
                    <label className={style.formField}>
                        Название категории:
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>

                    <button className={style.formField}>ДОБАВИТЬ</button>
                </form>

            </div>
        </div>
    );
};

export default AddCategoryModal;