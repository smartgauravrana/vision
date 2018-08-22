import React from 'react';
import classes from './Input.css';

const Input = props => (
    <div>
        <input className={classes.Input} placeholder={props.placeholder}></input>
    </div>
);

export default Input;