import React from 'react';
import { TextField } from '@mui/material';

export default function TextForm(props){
    return (
        <TextField 
        id={props.id} 
        label={props.label}
        required={props.required}
        type={props.type}
        helperText={props.helperText}
        fullWidth={props.fullWidth}
        autoFocus={props.autofocus}
        name={props.name}
        margin={props.margin}
        size={props.size}
         />
    );

}