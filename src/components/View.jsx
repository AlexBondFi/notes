import React from 'react';

const View = (props) => {
    return (
        <div className='view'>
            <div className="lines"></div>
            <ul className='list'>
                <li>First name: <span>{props.firstname}</span></li>
                <li>Family name: <span>{props.lastname}</span></li>
                <li>Phone: <span>{props.phone}</span></li>
                <li>Role: <span>{props.role}</span></li>
                <li>Message: <span>{props.message}</span></li>
            </ul>
        </div>
    );
};

export default View;