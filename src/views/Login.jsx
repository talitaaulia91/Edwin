import {React, useState} from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../assets/css/index.css'
import TextForm from '../components/TextForm.jsx'
import Buttons from '../components/Button.jsx'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login(params){
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate ();
    const handleSubmit = async (event) => {
      event.preventDefault();

        const data = new FormData(event.currentTarget);

        
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

        const config = {
            headers: {
                "Content-type": "application/json",
                'X-CSRF-TOKEN': csrfToken,
            },
        };  


        await axios.post(`http://edwin.test/api/login`, {            
            username: data.get("username"),
            password : data.get("password")
        }, config)
        .then((response) => {
            alert('Login berhasil!');
            sessionStorage.setItem('token',JSON.stringify(response.data.access_token));
            sessionStorage.setItem('user',JSON.stringify(response.data.user));
            navigate("/dashboard");
            console.log(response.data);
        }, (error) => {
            console.log(error.response.data.message);
        });
    }



    return (
      <>
       <meta name="csrf-token" content="{{ csrf_token() }}"/>
        <Container maxWidth="sm">
          <Box className="box" 
          component="form"
          onSubmit={handleSubmit}
          >
            <Box className="card">
            <div className="title">Sign In</div>

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
              <h5 className="subtitle">Don't have any account?</h5>
              <Link to='/register'className="anchor">Register!</Link>
            </span>
            </Box>
          </Box>
        </Container>
        </>
    )
}