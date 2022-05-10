import React from 'react';
import '../Modal.css'

const AddCardModal = ({active, setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>

            </div>
        </div>
    );
};

export default AddCardModal;