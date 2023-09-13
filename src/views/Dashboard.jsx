import {useState, useEffect,React} from 'react';


export default function Dashboard(props){
    const [token, setToken] = useState(null);
    useEffect(() => {
        getToken();
    }, []);
    async function getToken() {
        const userString =  sessionStorage.getItem('token')
        const user_detail = JSON.parse(userString);
        setToken(user_detail);
    }

    if (!token) return 'loading...';
    console.log(token)
   return(
    <>
     
    </>
   )
}