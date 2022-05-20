
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { updateUser } from "../redux/userReducer";
import axios from "axios";
import '../css/Header.css'


import Pokeball from "./pokeballpng.png";

export default function Header(props) {

  useEffect(() => {
    axios.get("/auth/session").then((res) => {
      if (res.data.id) {
        props.updateUser(res.data);
      }
    });
  }, []);

  return (
    <Link to="/" className="home-link">
      <header>
        <h1 className="title">
          Pokemon Team Builder
          <img className="pkmball" src={Pokeball} alt="Pokeball"></img>
        </h1>
      </header>
    </Link>
  );
}

// function mapStateToProps(reduxState) {
//   return reduxState;


// export default connect(mapStateToProps, { updateUser })(Header);
