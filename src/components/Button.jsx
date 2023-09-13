import React from 'react';
import { Button } from '@mui/material';

export default function Buttons(props){
    return (
        <Button 
        variant={props.variant}
        size={props.size}
        type={props.type}
        style={{ 
            width:200,
            marginTop:20,
            backgroundColor:"#9D44C0",
            borderStartStartRadius:0,
            borderEndEndRadius:15,
            borderTopRightRadius:15,
            borderBottomLeftRadius:15 
         }}
        >
        {props.label}</Button>

    );

}