import React, { useState, useEffect } from 'react';
import RegLoginNav from './RegLoginNav';
import UserNav from './UserNav';

const Nav: React.FC = () =>{
  const [isRegister, setIsRegister] = useState(false);
  const [sessionTrainerName,setSessionTrainerName] = useState<string | null>(null)


  useEffect(()=>{
    let user = sessionStorage.getItem("trainerName");
    setSessionTrainerName(user)
  },[])



  return (
    <nav className={`lg:w-[20vw] w-full lg:h-[70vh] h-auto border-4 p-4 rounded-lg ${isRegister ? 'border-red-500 bg-red-500' : 'border-blue-500'}`}>
  { sessionTrainerName ? <UserNav sessionTrainerName={sessionTrainerName}/> : <RegLoginNav/>  }
  </nav>
  );
}

export default Nav;
