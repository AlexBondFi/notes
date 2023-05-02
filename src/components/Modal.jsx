import React from 'react';

const Modal = (props) => {
    return (
        <div className='modal'>
            <div className='modalContent'>
            <p>First name: <span>{props.firstname}</span></p>
                <p>Family name: <span>{props.lastname}</span></p>
                <p>Phone: <span>{props.phone}</span></p>
                <p>Role: <span>{props.role}</span></p>
                <p>Message: <span>{props.message}</span></p>
            <button onClick={props.submit}>SEND</button>
            <button onClick={props.click}>NOT SEND</button>
            </div>
        </div>
    );
};

export default Modal;