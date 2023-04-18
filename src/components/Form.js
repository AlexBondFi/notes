import React from 'react';
import App from '../App';

const Form = (props) => {
    return (
        <form onSubmit={props.submit} className={classes.form}>
            <div className='inpuis'>
            <label htmlFor="firstname">Name</label>
            <input type="text" id='firstname'/>
            </div>
            <div className='inputs'>
            <label htmlFor="lastname">Surname</label>
            <input type="text" id='lastname'/>
            </div>
            <div className='inputs'>
            <label htmlFor="phone">Phone</label>
            <input type="number" id='phone'/>
            </div>
            <div className='inputs'>
            <label htmlFor="role">Role</label>
            <select name="roles" id="role">
                <option value="teacher">Student</option>
                <option value="student">Teacher</option>
                <option value="other">Other</option>
            </select>
            </div>
            <div className='inputs'>
            <label htmlFor="message">Message</label>
            <textarea id='message'></textarea>
            </div>
            <button type='submit'>BTN</button>
        </form>
    );
};

export default Form;