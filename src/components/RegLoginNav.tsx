import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegLoginNav = () => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [trainerName, setTrainerName] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => setIsRegister(!isRegister);

  const handleLogin = () => {
    axios
      .post(`http://localhost:8080/auth/login`, {
        trainerName,
        password,
      })
      .then((res) => {
        console.log(res.data);
        const capitalizedTrainerName =
          res.data.trainerName.charAt(0).toUpperCase() +
          res.data.trainerName.slice(1);

        sessionStorage.setItem("trainerName", capitalizedTrainerName);
        sessionStorage.setItem("trainerId", res.data.trainerId);
        sessionStorage.setItem("token", res.data.token); 
        alert(capitalizedTrainerName + " " + "logged in");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert(`Error: ${err.response.status} - ${err.response.data}`);
      });
  };

  const handleRegister = () => {
    axios
      .post(`http://localhost:8080/auth/register`, {
        trainerName,
        password,
      })
      .then((res) => {
        console.log(res.data);
        alert(trainerName + " registered");
      })
      .catch((err) => {
        console.error(err);
        alert(`Error: ${err.response.status} - ${err.response.data}`);
      });
  };

  return (
    <>
      <h3 className="text-white text-2xl font-bold">
        {isRegister ? "Register" : "Login"}
      </h3>

      <input
        type="text"
        className="block w-full mt-2 p-2 rounded"
        placeholder="Trainer Name"
        value={trainerName}
        onChange={(e) => setTrainerName(e.target.value)}
      />

      <input
        type="password"
        className="block w-full mt-2 p-2 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        pattern="^(?!.*\s).{6,}$"
        title="Password must be at least 6 characters and contain no spaces"
        required
      />
      {isRegister ? (
        <button
          className="block w-full mt-4 p-2 bg-green-500 text-white rounded-lg"
          onClick={handleRegister}
        >
          Register
        </button>
      ) : (
        <button
          className="block w-full mt-4 p-2 bg-green-500 text-white rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      )}

      <div className="flex flex-col justify-center mt-4 space-y-2">
        {/* <button className="p-2 bg-gray-700 text-white rounded text-sm">Sign in with TikTok</button>
        <button className="p-2 bg-gray-700 text-white rounded text-sm">Sign in with GitHub</button>
        <button className="p-2 bg-gray-700 text-white rounded text-sm">Sign in with Gmail</button> */}
      </div>

      <button
        className="block w-full mt-4 p-2 text-blue-500 underline"
        onClick={handleToggle}
      >
        {isRegister ? "Switch to Login" : "Switch to Register"}
      </button>
    </>
  );
};

export default RegLoginNav;
