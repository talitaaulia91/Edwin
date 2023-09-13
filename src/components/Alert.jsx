import React, {forwardRef} from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";


// const Alert = React.forwardRef(function alert(props, ref){
//     return <MuiAlert elevation={6} ref={ref} variant="filled"></MuiAlert>
// });

export default function Alerts(props){
    const configSnackBar ={
        vertical: "top",
        horizontal: "center"
    };

    const {vertical, horizontal} = configSnackBar;

    return(
        <Snackbar 
        open={props.open} 
        autoHideDuration={4000} 
        onClose={props.onClose}
        anchorOrigin={{ vertical, horizontal }}
        key = {vertical + horizontal}>
        <Alert 
        onClose={props.onClose}
        severity={props.severity}
        >
       {props.label}
        </Alert>
        </Snackbar>

       
    )

}