import React from 'react';

const View = (props) => {
    return (
        <div className='view'>
            <div className="lines"></div>
            <ul className='list'>
                <li>First name
                    <span>{props.firstname}</span>
                </li>
                <li>Family name</li>
                <li>Phone</li>
                <li>Role</li>
                <li>Message</li>
            </ul>
        </div>
    );
};

export default View;