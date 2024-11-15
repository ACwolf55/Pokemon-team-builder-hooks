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
    window.location.reload();
  }
 
  return (
<>
    <h3>{sessionTrainerName}</h3>
    <h4 onClick={()=>navigate('/trainer-teams')}
      className="cursor-pointer hover:text-blue-500"
      > Saved Teams</h4>
    <button onClick={signOut}
    className="cursor-pointer hover:text-blue-500"
    >sign out</button>
</>
  );
}

export default UserNav;