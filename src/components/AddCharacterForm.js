import React, {useState} from "react";

const AddCharacterForm = ({onSave}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div>
            <form>
                <label>
                    Введите имя персонажа
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    Введите описание песонажа
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>

                <button onClick={() => onSave({name, description})}>ДОБАВИТЬ</button>
            </form>
        </div>
    );
};

export default AddCharacterForm;
