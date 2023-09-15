import {React, useState} from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../assets/css/index.css'
import TextForm from '../components/TextForm.jsx'
import Buttons from '../components/Button.jsx'
import Alerts from '../components/Alert.jsx'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register(params){
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errEightChar, setErrEightChar] = useState(false);
    const [errSymbol, setErrSymbol] = useState(false);
    const [errUpper, setErrUpper] = useState(false);
    const [errLower, setErrLower] = useState(false);
    const [errNumbers, setErrNumbers] = useState(false);
    const [errUsername, setErrUsername] = useState(false);
    const navigate = useNavigate ();
       

        const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const username = data.get("username");
        const password = data.get("password");

        const symbolRegex = /[-!@#$%^&*()_+|~=`{}\[\]:;"'<>,.?/]+/;
        const upperCaseRegex = /[A-Z]+/;
        const lowerCaseRegex = /[a-z]+/;
        const numbersRegex = /[0-9]+/;


        if(password.length < 8){
          setErrEightChar(true);
          return;
        }

        if(!symbolRegex.test(password)){
          setErrSymbol(true);
          return;
        }

        if(!upperCaseRegex.test(password)){
          setErrUpper(true);
          return;
        }

        if(!lowerCaseRegex.test(password)){
          setErrLower(true);
          return;
        }

        if(!numbersRegex.test(password)){
          setErrNumbers(true);
          return;
        }

        if(password.includes(username)){
          setErrUsername(true);
          return;
      }

        
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

        const config = {
            headers: {
                "Content-type": "application/json",
                'X-CSRF-TOKEN': csrfToken,
            },
        };  


        await axios.post(`http://127.0.0.1:8000/api/register`, {            
            username: data.get("username"),
            email: data.get("email"),
            password : data.get("password")
        }, config)
        .then((response) => {
            setIsSuccess(true);
            navigate("/");
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    const handleClose = () => {
      setIsSuccess(false);
      setErrEightChar(false);
      setErrSymbol(false);
      setErrUpper(false);
      setErrLower(false);
      setErrNumbers(false);
      setErrUsername(false);
    };


    return (
      <>
        <meta name="csrf-token" content="{{ csrf_token() }}"/>
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
            label="Sign Up"
            size="small"  
            type="submit"
            sx={{ 
                borderRadius:50
             }} 
            />

            <Alerts label="Registrasi berhasil! Silakan login!" open={isSuccess} severity ="success"onClose={handleClose}/>
            <Alerts label="Password minimal terdiri dari 8 karakter!" open={errEightChar} severity ="error"onClose={handleClose}/>
            <Alerts label="Password harus mengandung simbol!" open={errSymbol} severity ="error"onClose={handleClose}/>
            <Alerts label="Password harus mengandung huruf kapital!" open={errUpper} severity ="error"onClose={handleClose}/>
            <Alerts label="Password harus mengandung huruf kecil!" open={errLower} severity ="error"onClose={handleClose}/>
            <Alerts label="Password harus mengandung angka!" open={errNumbers} severity ="error"onClose={handleClose}/>
            <Alerts label="Password tidak boleh mengandung username!" open={errUsername} severity ="error"onClose={handleClose}/>


             <span style={{ display:"flex", flexDirection:"row", alignItems:"center" }}>
              <h5 className="subtitle">Already have an account?</h5>
              <Link to='/'className="anchor">Sign In!</Link>
            </span>
            </Box>
          </Box>
        </Container>
        </>
    )
}