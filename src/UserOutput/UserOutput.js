import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className='userOutput'>
            <p> {props.userName}: 
                First P Tag.
            </p> 
            <p>
               second P Tag.
            </p>
        </div>
    );
}

export default UserOutput;