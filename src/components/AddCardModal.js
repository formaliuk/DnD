import React, {useState, useEffect} from 'react';
import style from './AddCardModal.module.css'

const AddCardModal = ({active, setActive}) => {

    const [name, setName] = useState(() => {
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });
    const [description, setDescription] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`
        Имя персонажа: ${name} 
        Описание персонажа: ${description}`)
    }

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);

    useEffect(() => {
        localStorage.setItem("description", JSON.stringify(description));
    }, [description]);


    // const handleNameChange = ({target: {value}}) => {
    //     setName(value)
    // }
    //
    // const handleDescriptionChange = ({target: {value}}) => {
    //     setDescription(value)
    // }

    return (
        <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>

                <form onSubmit={handleSubmit} className={style.form}>
                    <label className={style.formField}>
                        Имя персонажа:
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>

                    <label className={style.formField}>
                        Описание:
                        <input
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </label>

                    <button className={style.formField}>ДОБАВИТЬ</button>
                    <span>Не смотрите что кнопка кривая пж.<br /> Технический отдел работает над проблемой</span>
                </form>

                {/*<form>*/}
                {/*    <label>*/}
                {/*        Имя персонажа:*/}
                {/*        <br />*/}
                {/*        <input type="text" name="Имя персонажа" value={Name} onChange={handleNameChange}/>*/}
                {/*    </label>*/}
                {/*    <br />*/}
                {/*    <label>*/}
                {/*        Описание персонажа:*/}
                {/*        <br />*/}
                {/*        <textarea id='textarea' value={description} onChange={handleDescriptionChange}/>*/}
                {/*    </label>*/}
                {/*    <br />*/}
                {/*    <button>Добавить</button>*/}
                {/*</form>*/}

            </div>
        </div>
    );
};

export default AddCardModal;