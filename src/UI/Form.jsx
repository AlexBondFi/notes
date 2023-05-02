import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.submit} onChange={props.change}>
            <div className='inputs'>
            <label htmlFor="firstname">Name</label>
            <input type="text" name='firstname' id='firstname'/>
            </div>
            <div className='inputs'>
            <label htmlFor="lastname">Surname</label>
            <input type="text" name='lastname' id='lastname'/>
            </div>
            <div className='inputs'>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name='phone' id='phone'/>
            </div>
            <div className='inputs'>
            <label htmlFor="role">Role</label>
            <select name="role" id="role">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="other">Other</option>
            </select>
            </div>
            <div className='inputs'>
            <label htmlFor="message">Message</label>
            <textarea name='message' id='message'></textarea>
            </div>
            <button type='submit'>BTN</button>
        </form>
    );
};

export default Form;