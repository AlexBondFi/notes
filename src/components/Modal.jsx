import React from 'react';

const Modal = () => {
    return (
        <div className='modal'>
            <div className='modalContent'>
            <p>Name:</p>
            <p>Surname:</p>
            <p>Phone:</p>
            <p>Role:</p>
            <p>Message:</p>
            <button>SEND</button>
            <button>NOT SEND</button>
            </div>
        </div>
    );
};

export default Modal;