import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserNavProps {
    sessionTrainerName: string | null;
  }
  const UserNav: React.FC<UserNavProps> = ({ sessionTrainerName }) => {


  useEffect(()=>{
  
  },[])

  const signOut =()=>{
    sessionStorage.clear();

  }
 
  return (
<>
    <h3>{sessionTrainerName}</h3>
    <button onClick={signOut}>sign out</button>
</>
  );
}

export default UserNav;