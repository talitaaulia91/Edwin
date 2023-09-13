import {React, useState} from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../assets/css/index.css'
import TextForm from '../components/TextForm.jsx'
import Buttons from '../components/Button.jsx'
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Register(params){
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("haii")
    }
    return (
        <Container maxWidth="sm">
          <Box className="box" 
          component="form"
          onSubmit={handleSubmit}
          >
            <Box className="card">
            <div className="title">Register</div>

            <TextForm 
            id="email"
            name="email"
            label="Email"
            fullWidth
            required
            margin="normal"
            autoFocus
            type="email"
            size="small"
            />

            <TextForm 
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoFocus
            type="text"
            size="small" 
            />

            <div style={{ display:"flex", width:"100%", position:"relative"}}>
            <TextForm 
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoFocus
            inputProps={{ minLength: 8 }}
            type={isShowPassword ? "text" : "password"}
            size="small"
            />
          <div style={{ position:"absolute", right:10, top:"40%", cursor:"pointer" }} onClick={()=>setIsShowPassword(!isShowPassword)}>
          {isShowPassword ? 
            <VisibilityOff fontSize="small"/>
          :
            <Visibility fontSize="small"/>
          }
          </div>
            </div>

            <Buttons
            variant="contained"
            label="Sign In"
            size="small"  
            type="submit"
            sx={{ 
                borderRadius:50
             }} 
            />
             <span style={{ display:"flex", flexDirection:"row", alignItems:"center" }}>
              <h5 className="subtitle">Already have an account?</h5>
              <a className="anchor">Sign In!</a>
            </span>
            </Box>
          </Box>
        </Container>
    )
}