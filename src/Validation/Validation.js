import React from 'react';
// import './UserInput.css';

const Validation = (props) => {
    return (
        <div className='userInput'>
            <p>
                length of the enetered word is: {props.nameLength}
            </p> 
            <p>
                { (props.nameLength > 5) ? 'Too Long' : 'Too Short' }
            </p>
        </div>
    );
}

export default Validation;