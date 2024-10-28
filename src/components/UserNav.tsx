import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface UserNavProps {
    sessionTrainerName: string | null;
  }


  const UserNav: React.FC<UserNavProps> = ({ sessionTrainerName }) => {

    const navigate = useNavigate()


  useEffect(()=>{
  
  },[])

  const signOut =()=>{
    sessionStorage.clear();
    navigate('/')

  }
 
  return (
<>
    <h3>{sessionTrainerName}</h3>
    <button onClick={signOut}>sign out</button>
</>
  );
}

export default UserNav;