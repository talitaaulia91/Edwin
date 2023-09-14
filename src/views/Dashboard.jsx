import {useState, useEffect,React} from 'react';
import ResponsiveDrawer from '../components/Sidebar'
import Cards from '../components/Card'
import {Link, useNavigate} from 'react-router-dom';



export default function Dashboard(props){
      const navigate = useNavigate ();
      const token = sessionStorage.getItem('token')
      const user = sessionStorage.getItem('user')
      const userDetail = JSON.parse(user)


   return(
    <>
        <ResponsiveDrawer 
        email={userDetail.email}
        username={userDetail.username}
        />
      
    </>
   )
}