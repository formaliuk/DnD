import React, {useState} from 'react';

const AddCategoryForm = ({onSave, onClose}) => {

    const [name, setName] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSave({name});
        onClose();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Добавление категории</h3>
                <label>
                    Введите название новой категории
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>

                <button onClick={onClose}>ДОБАВИТЬ</button>
            </form>
        </div>
    );
};

export default AddCategoryForm;