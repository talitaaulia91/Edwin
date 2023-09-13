import {useState, useEffect,React} from 'react';
import Sidebar from '../components/Sidebar'


export default function Dashboard(props){
    const [token, setToken] = useState(null);
    const [user, setUser]   = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const userString =  sessionStorage.getItem('user')
        const user_detail = JSON.parse(userString)
        setUser(user_detail);
    }

   return(
    <>
        <Sidebar/>
    </>
   )
}